var host = process.argv[2];
var port = process.argv[3];
var dgram = require('dgram');
var sequence = 0;

host = host !== undefined ? host : '127.0.0.1';
port = port !== undefined ? port : 7;

console.log('pinging', host, port);

setInterval(ping, 10);

function ping() {
  var message = new Buffer('ping' + sequence);
  var socket = dgram.createSocket('udp4');

  console.log('pinging', host, port, sequence);
  var errorTag = 'error? ' + sequence;
  socket.send(message, 0, message.length, port, host, function(err) {
    console.log(errorTag, err);
    socket.close();
  });


  sequence++;
}
