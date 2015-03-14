
console.log(module);
console.log(module.exports);
function Person(name){
    this._name = name;
}

Person.prototype.getName = function(){
    return this._name;
}

Person.prototype.setName = function(name){
    this._name = name;
}
Person.age= '2';
console.log(module.exports == exports);

module.exports =Person;