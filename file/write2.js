var fs = require('fs');

fs.open('./msg2.txt','w',0666,function(err,fd){
    var buf = new Buffer('珠峰培训');
    fs.write(fd,buf,3,6,0,function(err,written,buf1){
        fs.write(fd,buf,9,3,6,function(err,written2){
            fs.fsync(fd,function(){
                fs.close(fd);
            })
        })
    })
})