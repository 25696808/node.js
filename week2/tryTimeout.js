console.log(__dirname);
console.log(__filename);

/*function printHello(){
    console.log("Hello.");
}
var t = setTimeout(printHello, 2000);
clearTimeout(t);*/

setInterval(()=>{
    console.log(new Date().getSeconds())
},1000);