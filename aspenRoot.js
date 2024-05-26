const express = require('express');
const app = express();
const server = require('http').Server(app);
const url = require('url');

const WebSocket = require('ws');

if(process.argv.length < 3) {
  console.log("Usage: node server.js <port>");
  process.exit();
}

const port = parseInt(process.argv.slice(2));


const wss1 = new WebSocket.Server({ noServer: true });
const wss2 = new WebSocket.Server({ noServer: true });



var cameraArray={};

var gMessage = null;
var lastMessage = 0;
var lastSend = 0;


// camera websocket
wss1.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    gMessage = message;
    lastMessage++;
    //console.log(gMessage);
    wss2.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

// webbrowser websocket
wss2.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
  	// nothing here should be received
    console.log('received wss2: %s', message);
  });
});

server.on('upgrade', function upgrade(request, socket, head) {
  const pathname = url.parse(request.url).pathname;

  if (pathname === '/jpgstream_server') {
    wss1.handleUpgrade(request, socket, head, function done(ws) {
      wss1.emit('connection', ws, request);
    });
  } else if (pathname === '/jpgstream_client') {
    wss2.handleUpgrade(request, socket, head, function done(ws) {
      wss2.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

app.get("/", function (req, res) {
    res.redirect("index.html")
});

app.get("/numberofclients", function (req, res) {
    var numberofclient = wss2.clients.size;
    res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
   res.end(numberofclient.toString()); // send response body
});

// cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/public'));

function generateImageStream(){
  const stream = new Writeable({
    write(chunk, encoding, callback) {
      // do something with the chunk
      callback();
    }
  });
  return stream;
}

function base64toJpeg(base64) {
  var base64Data = base64.replace(/^data:image\/png;base64,/, "");
  return Buffer.from(base64Data, 'base64');
}

app.get("/stream", function (req, res) {
  // set up as mjpeg stream

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.writeHead(200, {
    'Content-Type': 'multipart/x-mixed-replace; boundary=--myboundary; type=text/plain',
    Connection: 'close', // Ensure connection closes when client disconnects
  });


  // cross origin




  let intervalId;

  res.write('--myboundary\n');


  intervalId = setInterval(() => {
    if(/*lastMessage > lastSend && */gMessage != null){
      lastSend = lastMessage;
    try{
        // send image
        res.write('Content-Type: image/png\n');
        res.write('Content-Length: ' + gMessage.length + '\n');
        res.write('\n');
        res.write(gMessage);
        res.write('\n--myboundary\n');
      

    } catch(err) {
      console.log(err);
    }
  }
  }, 1000/60); 

  req.on('close', () => {
    clearInterval(intervalId);
  });

});






server.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})

