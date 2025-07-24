//spread operator

var arr1 =[1,2,3];
var arr2 = [4,5,6];
var arr3 = [...arr1,...arr2];
console.log(arr3);

//assign values using S.O

var obj1 ={a:1,b:2};
var obj2 = {...obj1,c:3,d:4};
console.log(obj2);

//assign values in function

function sum(a,b,c){
    return a+b+c;
}
var numbers = [1,2,3];
console.log(sum(...numbers));

//SHALLOW COPY

var originalObj = {
    name:"vyshu",
    age:23,
    hobbies:['music','movies']
}

var Shallowcopy = {...originalObj};
originalObj.hobbies.push('coding');
console.log(originalObj);
console.log(Shallowcopy);