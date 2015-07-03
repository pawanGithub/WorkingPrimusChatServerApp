<script src="/primus/primus.io.js"></script>
Then create your client Primus instance like this:

var socket = Primus.connect('ws://localhost:8080');
 
socket.on('open', function () {
 
  // Send request to join the news room 
  socket.send('hi', 'hello world');
 
  // listen to hello events 
  socket.on('hello', function (msg) {
 
    console.log(msg); //-> hello from the server 
 
  });
 
});
 
