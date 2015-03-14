var repl = require('repl');
var server = repl.start({});
var con = server.context;
con.name='zfpx';
con.age = 5;
con.grow = function(){
    return ++con.age;
}
