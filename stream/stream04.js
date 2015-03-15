var fs = require('fs');
var src = fs.createReadStream('./capture-7.avi');
var target = fs.createWriteStream('./capture.avi');
src.on('data',function(data){
    var flag = target.write(data);
    console.log(flag);
})
target.on('drain',function(){
    console.log('操作系统缓存区的数据已经被全部输出!');
})