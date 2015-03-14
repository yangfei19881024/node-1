var a = {
    name:'name',
    fn:{
        my:function(){
            return function(){
                console.log(this.a.name);
            }
        }
    }
}
console.log(a.fn.my());
