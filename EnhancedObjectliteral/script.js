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