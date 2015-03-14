/*
var buf1 = new Buffer(12);
buf1.fill(1,1,3);
console.log(buf1);

var buf2 = new Buffer([1,2,3]);
console.log(buf2);

var buf3 = new Buffer("珠峰培训",'utf8');
console.log(buf3);

var buf4 = new Buffer(1);
buf4[0] = -12;
console.log(buf4[0]);

var sum =0;
for(var i=0;i<8;i++){
    sum += Math.pow(2,i);
}
console.log(sum);


*/

var buf = new Buffer("珠峰培训");
//e7 8f a0 e5 b3 b0 e5 9f b9 e8 ae ad
var buf1 = new Buffer([0xe7,0x8f,0xa0,0xe5,0xb3,0xb0,0xe5]);
var buf2 = new Buffer([0x9f,0xb9,0xe8,0xae,0xad]);
console.log(buf1.toString());
console.log(buf2.toString());

function concat(arr,length){
    var totalBuf = new Buffer(12);
    var index = 0;
    for(var i=0;i<arr.length;i++){
        arr[i].copy(totalBuf,index,0,arr[i].length);
        index+=arr[i].length;
    }
    return totalBuf;
}

var totalBuf = concat([buf1,buf2],12);

console.log(totalBuf.toString());

console.log(Buffer.isBuffer(""));

console.log(Buffer.byteLength("utf8"));