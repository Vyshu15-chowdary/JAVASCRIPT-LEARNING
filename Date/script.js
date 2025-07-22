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

//Operations with dates

let date1 = new Date('2022-01-01');
let date2 = new Date('2022-01-02');
if (date1 < date2) {
  console.log('date1 is before date2');
} else {
  console.log('date1 is after date2');
}

//adding and subtracting time

var date = new Date();
 let SetDate = date.setDate(date.getDate()+1);
 console.log(SetDate);

 //local date and time
 var date = new Date();
 let dateString = date.toLocaleString();
 console.log(dateString);
 let Month = date.getMonth();
 console.log(Month);
