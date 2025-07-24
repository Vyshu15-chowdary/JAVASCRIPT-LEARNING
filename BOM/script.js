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

//screen object

//width nd height of screen

const Scwidth = window.screen.width;
console.log(Scwidth);//1536

//color depth of screen

const ScolorDepth = window.screen.colorDepth;
console.log(ScolorDepth); //24

//Location object

const currUrl = window.location.href;
console.log(currUrl); //http://127.0.0.1:5500/BOM/index.html

//change current url

/*
window.location.href = "http://127.0.0.1:5500/Map/index.html";

*/

//protocol of current url

const protocol = window.location.protocol;
console.log(protocol); //http

//hostname of current url

const hostName = window.location.hostname;
console.log(hostName); //127.0.0.1

//pathname of current url

const pathName = window.location.pathName;
console.log(pathName); //undefined //page.html

//search string of curr url

const search = window.location.search;
console.log(search); // ?query = example

//reload curr page

/*
const reload = window.location.reload();
console.log(reload);
*/


//TIMING

//start timer

const StartTimer = window.performance.now();
console.log(StartTimer); //1917.800000000745

//Load page resources
window.addEventListener('load',()=>{
    //calculate page load time

    const loadTime = window.performance.now() - StartTimer;
    console.log(`page loaded in ${loadTime} milliseconds`); //page loaded in 18.100000001490116 milliseconds

})

//Mark the start time
performance.mark('start') //page loaded in 17.5 milliseconds
//execute some code

for( let i=0; i<10000000; i++){

    i = i+1;
}

//mark end time
performance.mark('end');

//measure elapsed time
performance.measure('code execution time','start','end');

