//using Regexp constructor
//it test if a string contains specific substring
const regex1 = new RegExp("hello");
console.log(regex1.test("hello world"));//true

//using regexp literal

const regex2 = /world/; //literals are direct represantation of a value in source code.fixed value

console.log(regex2.test("hello")); //false

//matching sequence of series

const regex3 = /\d+/;
console.log(regex3.test("12345"));//true

//matching a valid emailaddress

const regexp4 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regexp4.test("vishuchowdary20@gmail.com"));//tue




