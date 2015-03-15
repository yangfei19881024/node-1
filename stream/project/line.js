//按行读取
var RETURN = 0x0d; //ascii \r 16 d = 13 return
var NEWLINE = 0x0a;// ascii \n
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function LineReader(path){
    this._rs = fs.createReadStream(path);
}
util.inherits(LineReader,EventEmitter);

LineReader.prototype.on('newListener',function(name,func){
    if(name == "newLine"){
        var line = [];
        var self = this;
        this._rs.on('readable',function(){
           var ch;
            while(null != (ch = this.read(1))){
                if(ch[0] == NEWLINE){
                    this.read(1);
                    self.emit('newLine',Buffer.concat(line).toString());
                    line = [];
                }else{
                    line.push(ch);
                }
            }
        })
        this._rs.on('end',function(){
            self.emit('newLine',Buffer.concat(line).toString());
            self.emit('end');
        })
    }
})

var reader = new LineReader('./1.txt');
reader.on('newLine',function(data){
    console.log(data);
});
reader.on('end',function(){
    console.log('end');
});

/**
 * 1. 支持linux
 * open read
 **/