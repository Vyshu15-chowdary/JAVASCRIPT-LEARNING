console.log(window.document.title);
window.alert("Hello World!"); // displays "Hello World!" in an alert box

console.log(window.history.length); //1
console.log(window.location.href); //http://127.0.0.1:5500/BOM/index.html
console.log(window.navigator.userAgent); //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0

//history object

//if browser supports history object or not

if(window.history){
    console.log("history length:"+ window.history.length);
}

//navigate back one page
 console.log(window.history.back());

 //forward 1 page
console.log(window.history.forward());

// navigate to 3rd page in history list

console.log(window.history.go(2));

// get cuurent state of the history stack

console.log("current state :" ,window.history.state ); //null

// navigator object

//getnavigator object
const nav = window.navigator;
console.log(nav);

//get name of browser
const browserName = nav.appName;
console.log(browserName); //netscape

//version of browser

const browserVersion = nav.appVersion;
console.log(browserVersion); //5.0

// user agent string

const userAgent =nav.userAgent;
console.log(userAgent); //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0

//lang of browser

const browserLang = nav.language;
console.log(browserLang); //en-us

//os of user
const Os = nav.platform;
console.log(Os); //win 32