//writeStream 对象可以写入文件，
//fs.createWriteStream(path,[options]);
//path
//flag  encoding start

/**
 * var flag = write(chunk,[encoding],callback);
 **/

var src = fs.createReadStream('./msg.txt');
var target = fs.createWriteStream('./other.txt');

src.on('data',function(data){
    var flag  = target.write(data);
    if(false){
        src.pause();
    }
})
src.on('end',function(){

})
