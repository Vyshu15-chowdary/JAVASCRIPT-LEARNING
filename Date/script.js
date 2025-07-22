var currentDate = new Date();
let timestamp = currentDate.getTime();

console.log(currentDate);
console.log(timestamp);

var specificDate = new Date ('06/15/2002 02:45:30');
console.log(specificDate);

var specificDate = new Date(Date.parse('03/31/2025'));
console.log(specificDate);

//calculations

let milliseconds = 5000;
let seconds = milliseconds / 1000;
console.log(seconds);

// get current year

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
console.log(currentYear);