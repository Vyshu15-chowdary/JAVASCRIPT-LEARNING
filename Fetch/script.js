//fetch

fetch('https:/api.google.com/data')
.then(response => response.json())
.then(data =>console.log(data))
.catch(error => console.error(error))

//how to send data to a server

const data = {
    name:"john",
    email:"johndoe@gmail.com",
    message:'hello world!'
};

fetch('https://api.example.com/contact',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));