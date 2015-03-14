//fs.open(filename,flags,mode,callback(err,fd))
var fs = require('fs');
//0 stdin 1 stdout 2 stderr
fs.open('./fish','r',function(err,fd){
    var buff = new Buffer(9);
    fs.read(fd,buff,0,6,3,function(err,bytesRead,buffer){
        console.log(buff.toString());
        fs.read(fd,buff,6,3,null,function(err,by2,buf2){
            console.log(buff.toString());
        })
    })
})