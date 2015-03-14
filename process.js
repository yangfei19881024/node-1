console.log("1号桌点餐");
console.log("2号桌点餐");

process.nextTick(function(){
    console.log('给点吃点吧!');
});
setImmediate(function(){
    console.log('ufida记账');
});
console.log("3号桌点餐");

console.log("1号餐已准备好");
console.log("2号餐已准备好");
console.log("3号餐已准备好");

