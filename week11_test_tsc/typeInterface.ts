let some:any;
some = '123';
some = 123;

var str:string;
var num:number;
str = undefined;
num = null;

function sayHello(theName:string):any{
    return("Hello"+theName)
}
function log(message:string):void{
    console.log(message);
}

console.log(some);
console.log(sayHello("Tom"));
console.log(log("Hello"));