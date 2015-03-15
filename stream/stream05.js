var fs = require('fs');
var src = fs.createReadStream('./capture-7.avi');
var target = fs.createWriteStream('./capture.avi');
src.pipe(target);
