/**
 * readStream
 * fs.createReadStream(path,[options])
 * flags r w a
 * encoding utf8
 * start 文件的开始读取位置
 * end 整数值 批文件结束读取位置
 */
var fs = require('fs');
var out = fs.createReadStream('./msg2.txt');
var target = fs.createWriteStream('./capture.avi');
//流模式->非流动模式
out.on('readable',function(){
    console.log('------readable----------------');
    var spoon;

    while(null != (spoon = out.read(1))){
        target.write(spoon);
    }
}).on('end',function(){

})





