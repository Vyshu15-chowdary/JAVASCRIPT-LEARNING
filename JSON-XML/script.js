//Json
const Json =
{
    "name":"Rajini kanth",
    "age":60,
    "isHero":true,
    "Movies":["chandramukhi","robo","robo2"]
};
console.log(Json);

//json parse
const jsonString = '{"name":"Johnsmith","age":40,"isStudent":true,"favouriteFoods":["pizza","kfc","biryani"]}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.favouriteFoods);//['pizza', 'kfc', 'biryani']

//JSON.stringyfy

//j.s object to json string

const obj = { name: "John Smith", age: 30, isStudent: true, favoriteFoods: ["pizza", "tacos", "sushi"] };
const jsonStringfy = JSON.stringify(obj);
console.log(jsonString); // output: {"name":"John Smith","age":30,"isStudent":true,"favoriteFoods":["pizza","tacos","sushi"]}