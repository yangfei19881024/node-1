var fs = require('fs');
//fs.mkdir('./test')

fs.readdir('./test',function(err,files){
    console.log(files);
})

fs.exists('./test',function(exists){
    console.log(exists);
})

fs.realpath('./test',function(err,path){
    console.log(path);
})

fs.utimes('./test',new Date(),new Date(),function(){

});

//fs.chmod
//fs.rename
//fstruncate
var path = './1.txt';
fs.stat(path,function(err,stat){
    console.log(stat.size);
    fs.truncate(path,1024,function(err){
        fs.stat(path,function(err,stat){
            console.log(stat.size);
        });
    })
})


fs.watchFile('./msg2.txt',function(before,after){
    if(Date.parse(before.mtime) != Date.parse(after.mtime)){
        fs.rename(path,'./test/msg2.txt',function(err){
        });
    }
})