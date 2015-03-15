//net
// var server = new.createServer([option],listener)

var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./msg.txt');
var server = net.createServer(function(socket){
    console.log(socket.address());
    server.maxConnectoins = 5;
    server.getConnections(function(err,count){
        console.log('现在一共有'+count+'连接上了!');
    });
    socket.setEncoding('utf8');
    /*socket.on('data',function(chunk){
        console.log(chunk);
        console.log('已收到%d字节的数据',socket.bytesRead);
        out.write(chunk);
    })
    socket.on('end',function(){
        console.log('客户端连接关闭');
    })
    socket.on('close',function(){
        console.log('客户端退出');
    })*/
    socket.pipe(out,{end:true});
    setTimeout(function(){
        socket.unpipe(out);
    },5000)


}).listen(8080,'0.0.0.0',600,function(){
    console.log('start listen'+util.inspect(server.address()));
});

/*setTimeout(function(){
    server.close();
},10000);*/

server.on('close',function(){
    console.log('server closed!');
})


server.on('error',function(err){
    if(err.code){
        console.log(err.code)
    }
})
