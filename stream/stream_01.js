/**
 * readStream
 * fs.createReadStream(path,[options])
 * flags r w a
 * encoding utf8
 * start 文件的开始读取位置
 * end 整数值 批文件结束读取位置
 */
var fs = require('fs');
var out = fs.createReadStream('./msg.txt',{start:3,end:6});
out.on('open',function(){
    console.log('file opened.');
})
out.pause();
setTimeout(function(){
    out.resume();
},5000);
out.on('data',function(data){
    console.log('数据读取到'+data);
})
out.on('end',function(){
    console.log('读取完毕');
})

out.on('close',function(){
    console.log('文件关闭');
})

out.on('error',function(err){
    console.error(err);
})



