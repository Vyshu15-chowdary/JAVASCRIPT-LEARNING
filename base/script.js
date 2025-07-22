//empty array

let myArray = [];
console.log(myArray); // Array(0)

//with values

let Array2 = [1,2,3,"hello",true];
console.log(Array2);

//looping array

var arr = [1,2,3,4,5];

for (let i =0;i < arr.length; i++){
    console.log(arr[i]);
}

//for each

var arr = [1,2,3,4,5];

arr.forEach(function(item){
    console.log(item + 10);
});

//push
 var arr = [1,2,3]
 var push = arr.push(6,7);
 console.log(push);
//pop

let fruits = ['apple','banana','orange'];
let finalFruits = fruits.pop();
console.log(fruits);// removes orange

//unshift - adds begining of array

let unshift = fruits.unshift('watermelon','papaya');
console.log(fruits); // added to the list

//shift - removes first element

let shiftedFruits = fruits.shift();
console.log(fruits); //['papaya', 'apple', 'banana']

//join()

const myString = fruits.join();
console.log(myString); //papaya,apple,banana

//concat()

 var newFruits = fruits.concat('grapes','mango');
 console.log(newFruits); //['papaya', 'apple', 'banana', 'grapes', 'mango']

 // splice () -- extracts and returns a new array
var slice = fruits.slice(0,2); 
console.log(slice);
console.log(fruits);

//sort

const numbers = [50,30,20,10,60,80,100,90];
numbers.sort();

const ascending = (a,b) => a-b;
console.log(numbers.sort(ascending));

const Decending = (a,b) => b-a;
console.log(numbers.sort(Decending));