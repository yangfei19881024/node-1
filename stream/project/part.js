//分步读取
var fs = require('fs');
var fd = fs.openSync('./1.txt','r');//r w a
//readSync
var bytesRead = 0;
var result = [];
function readPart(buf,fd){

                        //bufstart length 文件的位置，默认是当前指针的位置
    return fs.readSync(fd,buf,0,16,null);
}
var count = 0;
do{
    console.log('========');
    count++;
    var buf = new Buffer(16);
    bytesRead = readPart(buf,fd);
    if(bytesRead<16){
        buf = buf.slice(0,bytesRead);
    }
    result.push(buf);
}while(count<5&& bytesRead<17)
var r = Buffer.concat(result);
console.log(r.toString());
