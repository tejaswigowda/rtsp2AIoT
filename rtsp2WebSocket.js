if (process.argv.length < 4) {
    console.log("Usage: node rtsp2WebSocket.js <rtsp-stream-url> <ws-url> <internalPort>(optional; default=9999) <fps>(optional/ default = 30) <size>(optional;delatult=1920x1080)");
    process.exit();
}

var streamUrl = process.argv[2];
var wsurl  = process.argv[3];
var internalPort = parseInt(process.argv[4] || "9999");
var fps = parseInt(process.argv[5] || "30")
var size = process.argv[6] || "1920x1080"



var stream = require('node-rtsp-stream')

var stream = new stream({
    name: 'name',
    streamUrl: streamUrl,
    wsPort: internalPort,
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', 
        '-r': fps,
        '-s': size,
    }
})



var WebSocket = require('ws');
var wsMain = new WebSocket('ws://localhost:' + internalPort);
wsMain.on('open', function open() {
    console.log('connected');
});
wsMain.on('close', function close() {
    console.log('disconnected');
    process.exit();
});
wsMain.on('message', function incoming(data) {
    // console.log(data);
    write(data);
});
wsMain.on('error', function incoming(data) {
    console.log(data);
    process.exit();
});



var ws = null;

function connectws() {
    ws = new WebSocket(wsurl);
    ws.on('open', function open() {
        console.log("connected");
        //write("hello");
    });

    ws.on('message', function incoming(data) {
        console.log(data);
    });

    ws.on('close', function close() {
        console.log('disconnected');
        //process.exit();
        connectws();
    });

    ws.on('error', function incoming(data) {
        console.log(data.code);
        setTimeout(connectws, 1000*10);
        //process.exit();
        //process.kill(process.pid, 'SIGKILL');
    });

    // catch unhandled errors
    ws.on('uncaughtException', function (err) {
        console.log(err);
        process.exit();
    });

    // catch ECONNREFUSED, TCPConnectWrap.afterConnect [as oncomplete]
    
}

connectws();

function write(data) {
    // send binary data
    if (ws.readyState == 1){// && numberofclients > 0) {
       // console.log("sending data");
        ws.send(data);
    }
}

// close stream on exit

process.on('exit', function() {
    console.log('exit');
    stream.stop();
    process.exit();
});

process.on('SIGINT', function() {
    console.log('SIGINT');
    stream.stop();
    process.exit();
});



// check if stream is still running

setTimeout(function() {
    //console.log(Object.keys(stream.mpeg1Muxer.stream));
    isAlive();
}, 1000*5);


function isAlive(){
    console.log(stream.mpeg1Muxer.stream.exitCode);
    console.log(wsMain.readyState);
    if(stream.mpeg1Muxer.stream.exitCode == null){
        console.log("stream is running");
        setTimeout(isAlive, 1000*5);
    } else {
        console.log("stream is not running");
        process.exit();
    }
}