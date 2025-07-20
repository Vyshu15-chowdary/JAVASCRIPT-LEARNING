//Type of Events
//mouseevents

let button = document.getElementById("button");

button.addEventListener("mousedown",function(){
    console.log("button pressed down");
});

button.addEventListener("mouseup",function(){
    console.log("button released")
});

//eventbubbling

document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('click',event =>{
        console.log(`clicked ${event.target.textContent}`);
    });
});
