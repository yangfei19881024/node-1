var EventEmitter = require('events').EventEmitter;
var util = require('util');
function Me(name){
    this.name = name;
}

util.inherits(Me,EventEmitter);

var me = new Me('zry');

me.addListener('newListener',function(event,func){
    console.log("event"+event);
})


me.addListener('boss',function(){
    console.log('can i help sir!');
})

me.emit('boss');

me.on('微博上有新消息了',function(){
    console.log('看一看吧');
});
me.emit('微博上有新消息了');

me.once('中午饿了',function(){
    console.log('吃午饭去');
});

me.emit('中午饿了');
me.emit('中午饿了');
var eatDinner = function(){
    console.log('吃晚饭去');
};
me.once('晚上饿了',eatDinner);
var eatCookie = function(){
    console.log('吃点小甜点');
};
me.once('晚上饿了',eatCookie);

//me.removeListener('晚上饿了',eatCookie);
//me.removeAllListeners('晚上饿了');
console.log(me.listeners('晚上饿了'));
//me.emit('晚上饿了');
//me.emit('晚上饿了');

console.log(EventEmitter.listenerCount(me,'晚上饿了'));

