var module = {

};

module.exports = [1,2,3];

var exports = module.exports;
console.log(exports);
module.exports.push(4);
exports.push(5);
console.log(exports);
exports = [8,9,10];
console.log(module.exports);
console.log(exports);
exports.push(88);
console.log(module.exports);
console.log(exports);