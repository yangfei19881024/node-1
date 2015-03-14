var path = require('path');
var fs = require('fs');
//normalize
console.log(path.normalize('.//a////b//d//..//c//f//..//'));

//join
console.log(path.join(__dirname,'a','b','c','msg'));
//resolve
console.log(path.resolve('/a','b','..','c','path.js'));

console.log(path.dirname('./msg2.txt'));
console.log(path.basename('./msg2.txt','.txt'));

console.log(path.sep);
console.log(path.delimiter);