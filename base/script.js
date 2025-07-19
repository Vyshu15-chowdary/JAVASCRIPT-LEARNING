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

