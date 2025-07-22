console.log('hi iam learning javascript😁')

//identifier

let myname = "vyshnavi";
console.log(myname);

//function

function Sum (a,b){
    console.log(1+2);
}

//single line comment

/*multi
line 
comment*/

//statement

var x = 30;

if(x<20){

    console.log("good evening");
    console.log("dear");
}else{
    console.log("good night");
}

//use strictmode


//if one statement throws error the remaining code will not execute

/*
 let y;
console.log(y);
*/
//with out strict it will work and not give error

 let Z = 20;
 console.log(Z);

function z(p1,p2){
    console.log(p2);
}

//operators

console.log(typeof 1); //number
console.log(typeof 'hello'); //string
console.log(typeof 3.14); //number
console.log(typeof {}); //object
console.log(typeof []); //object
console.log(typeof function(){});
console.log(typeof null); // object
console.log(typeof undefined); //undefined

//if-else

     x = -2;

     if (x >= 10){
        console.log("x is greater than 10");
     }else if (x < 0){
        console.log("x is less than 0 and =10")
     }else{
        console.log("x is equal to zero");
     }
//ternary operator

y = (2 > 5) ? console.log("true"): console.log("false");

//loose equal
//it checks value and automatically typeconversion takes place

console.log(1 ==1);
console.log(2 == "two");
console.log (0 == false);

//strict equal (===)

console.log("1"=== 1);
console.log("hi"=="hello"); //type same but value not same
console.log( false === false);

//dom

var one = document.getElementById("one");

// displaying the content inside the div
let contents = one.innerHTML;
console.log(contents);

//changing the contents of div
one.innerHTML = "<b>This is new content</b>"

//attribute

let myImage =document.getElementById("myImage");
let srcValue = myImage.getAttribute("src");
console.log(srcValue);

//change artibute
myImage.setAttribute("src","img.png");

//style property
// acessing from css
// let one = document.getElementbyId("one");
let bgcolor = one.style.backgroundColor;
console.log(bgcolor);
//we can change color
one.style.backgroundColor = "orange";

//text content
//displaying the content
let myPara = document.getElementById("mypara");
let Contents = myPara.textContent;
console.log(Contents);


//SETS
/*
 unlike arrays sets are not order and doesn't have indexes

*/

//creation of set

/*
const mySet = new Set([1,2,3,4,5]);
console.log(mySet); 

*/

const mySet = new Set();

mySet.add("A");
mySet.add("B");
mySet.add(1);
console.log(mySet);
console.log(mySet.size);
console.log(mySet.has("B")); //true
console.log(mySet.delete(1));
console.log(mySet);//A,B

//indexof

const Two = ['vyshu','ruchi','amrin'];
const index = Two.indexOf("ruchi");
console.log(index);

// print set of values

const SetValues = new Set([11,12,13]);
for(let value of SetValues){
    console.log(value);
}

//convert set to array
const Mset = new Set(['a','b','c','hurray']); //{}
const Marr = [...Mset];
console.log(Marr);//[]

//alternate way

const Nset = new Set(['apple','banana','orange'])
const Narr = Array.from(Nset);
console.log(Narr);
