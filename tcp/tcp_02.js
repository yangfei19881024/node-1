//net
// var server = new.createServer([option],listener)

var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./msg.txt');
var server = net.createServer(function(socket){
    server.getConnections(function(err,count){
        console.log('现在一共有'+count+'连接上了!');
    });
    socket.setEncoding('utf8');
    socket.pause();

    socket.on('data',function(chunk){
        socket.pause();
        t.ref();
    })
    socket.setTimeout(10*1000);
    socket.on('timeout',function(){
        socket.resume();
        socket.pipe(out,{end:true});
    })


    socket.on('close',function(){
        console.log('客户端退出');
    })
}).listen(8080,function(){
    console.log('start listen'+util.inspect(server.address()));
});
server.on('close',function(){
    console.log('server closed!');
})


server.on('error',function(err){
    if(err.code){
        console.log(err.code)
    }
})
