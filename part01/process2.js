console.log("1");

process.nextTick(function(){
    console.log('tick1');
});

process.nextTick(function(){
    console.log('tick2');
    setImmediate(function(){
        console.log('setImmediate1');
    });
});
process.nextTick(function(){
    console.log('tick3');
});

setImmediate(function(){
    console.log('setImmediate2');
});

console.log("2");

