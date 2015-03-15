var fs = require('fs');
var path = require('path');

function deep(dir){
    console.log(dir);
    var stat = fs.statSync(dir);
    if(stat.isDirectory()){
        var files = fs.readdirSync(dir);
        for(var i=0;i<files.length;i++){
            deep(path.join(dir,files[i]));
        }
    }
}

function wide(dir){
    console.log(dir);
    var stat = fs.statSync(dir);
    var fileArray = [];
    if(stat.isDirectory()){
        var files = fs.readdirSync(dir);
        for(var i=0;i<files.length;i++){
            console.log(files[i]);
            if(fs.statSync(path.join(dir,files[i])).isDirectory()){
                fileArray.push(fs.readdirSync(path.join(dir,files[i])));
            }
        }
        if(fileArray.length>0){
            for(var j=0;j<fileArray.length;j++){
                console.log(fileArray[j]);
            }
        }
    }
}


wide('./a');