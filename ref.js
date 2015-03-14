
var inter = setInterval(function(){
    console.log('hi');
},1000);

setTimeout(function(){
    //clearInterval(inter);
    inter.unref();
},1000)
setTimeout(function(){
    //clearInterval(inter);
    inter.ref();
},10000)

