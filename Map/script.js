const MyMap = new Map([
    [1,'vyshu'],
    [2,'mern'],
    [3,'value3']
]);
console.log(MyMap);
MyMap.set(4,'developer');
console.log(MyMap);
MyMap.get('vyshu'
);
console.log(MyMap);

//Map has a function

const Numbers = [1,2,3,4,5];
const doubledNumbers = Numbers.map(function(num){
    return num*2;
});
console.log(doubledNumbers);

const myMap = new Map();

const myArray = [1, 2, 3];

myMap.set(myArray, 'Hello World!');

console.log(myMap.get(myArray)); // Output: "Hello World!"

//iteration of map

let aMap = new Map();
aMap.set(0,'zero');
aMap.set(1,'one');

aMap.forEach(function(value,key){
    console.log(key + ' = ' + value);
});

//for of
let bMap = new Map();
bMap.set(0,'zero');
bMap.set(1,'one');

for(let [key,value] of bMap){
    console.log(key + " => " + value);

}

//entries method

let eMap = new Map();
eMap.set(0,'zero');
eMap.set(1,'one');

let entries= eMap.entries();
for(let entry of entries){
    console.log(entry[0] + ' = ' + entry[1]);
}

//obj to map

const obj = {zoo:'animal',muse:'thing'};
const oMap = new Map(Object.entries(obj));
console.log(obj);

//for each
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(num => num * 2);

doubleNumbers.forEach(num => console.log(num));