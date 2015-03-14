var test1 = require('./test.js')
var p = require.resolve('./test.js');
delete require.cache[p]
console.log(require.cache[p]);

console.log(__dirname);

console.log(__filename);

