var fs = require('fs');
//fs.writeFile(filename,data,options)
//optoin flag  r read w write a append
// mode 0777 1.执行 2 写入 4 读取 三个数 权限
// encoding 编写格式
/*
fs.appendFile('./write.txt',new Buffer("第一行"),function(err){
    if(err)
        console.log(err);
})*/

//64
fs.readFile('./tao.jpg','base64',function(err,data){
    fs.writeFile('./t.jpg',data,'base64',function(err){
        console.log('copy successfuly');
    });
})
