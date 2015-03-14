var fs = require('fs');
/*
var data = fs.readFileSync('./index.html');
console.log(data);
*/
fs.readFile('./fish','utf8',function(err,data){
    setTimeout(function(){
        console.log(data);
    },10000)
})

fs.readFile('./cucumber','utf8',function(err,data){
    console.log(data);
})

