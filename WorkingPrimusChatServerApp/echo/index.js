'use strict';

//
// Create the HTTP server and serve our index.html
//
console.log("XYZZZ");

var uniqueID = (function() {
   var id = 0; // This is the private persistent value
   // The outer function returns a nested function that has access
   // to the persistent value.  It is this nested function we're storing
   // in the variable uniqueID above.
   return function() { return id++; };  // Return and increment
})(); // Invoke the outer function after defining it.

var server = require('http').createServer(function incoming(req, res) {
  res.setHeader('Content-Type', 'text/html');
  require('fs').createReadStream(__dirname + '/index.html').pipe(res);
});
console.log("XYZZZ1");
//
// Attach Primus to the HTTP server.
//
var Primus = require('../')
  , primus = new Primus(server);
console.log("XYZZZ2");
//
// Listen for connections and echo the events send.
//
var arrChat = ["ww","weew","wew"];
var i=0;
primus.on('connection', function connection(spark) {
    spark.on('data', function received(data) {
    arrChat[uniqueID] = data;    
console.log(arrChat[uniqueID]);
    console.log(spark.id, 'received message:', data);
    spark.write(data);
i++;
for(var i=0;i<10;i++)
{
console.log(arrChat[i]);
}
  });
});


server.listen(8080, function () {
  console.log('Open http://localhost:8080 in your browser');
});


