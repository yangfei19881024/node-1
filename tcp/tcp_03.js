var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./mt.txt');
var server = net.createServer({allowHalfOpen:true},function(socket){
    socket.setEncoding('utf8');
    var rs = fs.createReadStream('./msg.txt');
    rs.on('data',function(data){
         socket.write(data);
    })
    var s = ''
    socket.on('data',function(data){
        s = data +" too!";
        console.log(s);
    })
    setInterval(function(){
        socket.write(s);
    },1000)
}).listen(8080);