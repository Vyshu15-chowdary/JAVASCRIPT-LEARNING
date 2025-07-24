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

//using object

function objValues(){
    var x =30;
    var y=40;

    return{
        a:x,
        b:y
    };
}

var result = objValues();
console.log(result.a);
console.log(result.b);

//using destructuring

function deValues(){
    var x = 60;
    var y = 70;

    return[x,y]
}

var [p,q] = deValues();
console.log(p);
console.log(q);

//destructuring nested array

/*
const nestArr = [1,[2,3],[4,5[6,7]]];
const [h,[i,j],[k,L,[m,n]]] = nestArr;
console.log([h]); */

//set default values in destructuring

/*
let Person = {name:"vyshu"};
let{name,age} = Person;
console.log(age);//undefined

//with default values

let personWithAge = {name:"rathod"};
let{name:newName,ager = 25} =personWithAge;
console.log(newName,ager);

*/

//destructuring objects

const Human = {
    name:'Alice',
    age:25,
    address:{
        city:'NewYork',
        state:'NY'
    }
};

//Destructuring
const{name,age,address:{city}} = Human;
console.log(name);
console.log(age);

