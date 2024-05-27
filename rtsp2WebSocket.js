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
var wsMaster = new WebSocket('ws://localhost:9999');
wsMaster.on('open', function open() {
    console.log('connected');
});
wsMaster.on('close', function close() {
    console.log('disconnected');
});
wsMaster.on('message', function incoming(data) {
    // console.log(data);
    write(data);
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
        connectws();
    });
}

connectws();

function write(data) {
    // send binary data
    if (ws.readyState == 1){// && numberofclients > 0) {
        console.log("sending data");
        ws.send(data);
    }
}