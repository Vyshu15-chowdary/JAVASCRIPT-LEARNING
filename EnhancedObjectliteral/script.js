//without EOL

var x = 10;
var y = 20;

var obj = {
    x:x,
    y:y
};
console.log(obj);

// with EOL

var x =30;
var y = 40;

var obj ={
    x,
    y
}
console.log(obj);

//with function

var name = "vyshu";
var age = 23;

const user = {
    name,
    age,

    greet(){
        console.log(`hello  my name is ${this.name} and iam ${this.age} years old`)
    },
    [`${name}_${age}`]  : 'User'
};

user.greet();
console.log(user['vyshu_23']);

//eol compute property name

const key = 'foo';
var obj = {
  [key]: 'bar'
};

console.log(obj.foo); // Output: 'bar'

//Computed property names can also be used to create objects with dynamic keys:

function createObject(key,value){
    return{
        [key]:value
    };
}

const obj1 = createObject('name','chowdary');
const obj2 = createObject('age',23);

console.log(obj1);
console.log(obj2);

//optional chaining

var optional= {

    name :'john',
    address:{
        street:'523 main street',
        city:'loss angels'
    }

};

//accesing nested prop using optional chaining

const country = optional?.address?.country;

console.log(country); // insted of error we get undefined

//check if method exist using opc

const Myobj = {
    foo :{
        bar:()=>{
            console.log("hello");
        }
    }
};

//optional chaining to check if method exists

if(Myobj?.foo?.bar){
    Myobj.foo.bar();
}

//if array is empty or not

const arr1 =[];
const arr2 =[1,2,3];

if(arr1?.length ===0){
    console.log('array one is empty')
}else{
    console.log('array one is not empty')
}

if(arr2?.length === 0){
    console.log('array 2 is empty');
}else{
    console.log('array 2 is not empty');
}