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

//XML


const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="Science Fiction">
    <title>The Hitchhiker's Guide to the Galaxy</title>
    <author>Douglas Adams</author>
    <price>9.99</price>
  </book>
  <book category="Mystery">
    <title>The Da Vinci Code</title>
    <author>Dan Brown</author>
    <price>15.99</price>
  </book>
</bookstore>`;


const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");
console.log(xmlDoc.getElementsByTagName("book")[0].getAttribute("category")); // output: Science Fiction



//J.s object to XML string

const books = [
  {category: "Science Fiction", title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", price: 9.99},
  {category: "Mystery", title: "The Da Vinci Code", author: "Dan Brown", price: 15.99}
];

const xmlDoc = document.createElement("bookstore");

books.forEach(book => {
  const bookElem = document.createElement("book");
  bookElem.setAttribute("category", book.category);
  
  const titleElem = document.createElement("title");
  titleElem.textContent = book.title;
  
  const authorElem = document.createElement("author");
  authorElem.textContent = book.author;
  
  const priceElem = document.createElement("price");
  priceElem.textContent = book.price;
  
  bookElem.appendChild(titleElem);
  bookElem.appendChild(authorElem);
  bookElem.appendChild(priceElem);
  
  xmlDoc.appendChild(bookElem);
});

const serializer = new XMLSerializer();
const xmlString = serializer.serializeToString(xmlDoc);
console.log(xmlString);