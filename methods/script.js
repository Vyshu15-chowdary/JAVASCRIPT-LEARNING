//typeof

var num =50;
console.log(typeof(num));

//converting

var num = 60;
var str = num.toString();
console.log(typeof str);

var str= "35";
var num = Number(str);
console.log(typeof num);

//parsing into an integer
var str = "68";
var num = parseInt(str);
console.log(typeof num);
console.log(num % 1 === 0);

var str ="3.14";
var num = parseFloat(str);
console.log(typeof num);
console.log(num % 1 !== 0); //float point doesn't give remainder zero

console.log(parseInt("hello world"));
console.log(Infinity + 1);

 console.log(Math.round(4.6)); //returns nearest number
 console.log(Math.floor(4.8)); // gives down to the nearest number
 console.log(Math.ceil(3.289)); // up to the nearest number
 console.log(Math.trunc(5.7)); // returns integer part
 
 var x = 67.873492
 console.log(x.toFixed(4)); // we fix no.of digits after a point