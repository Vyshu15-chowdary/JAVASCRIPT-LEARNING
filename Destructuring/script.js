//destructuring-Array

const numbers = [1,2,3,4,5];

//destructuring array into individual variables

const [a,b,c,d,e] = numbers;
console.log(a);
console.log(b);
console.log(e);

// reverse values using destructuring

const Digits =[1,2,3,4];
Digits.reverse();
//destructure reversed array

const [four,three,two,one] = Digits;
console.log(one);
console.log(four);

//return two values from function

function twoValues(){
    var x=10;
    var y=20;

    return [x,y];
}

var result = twoValues();
console.log(result[0]);//10
console.log(result[1]);