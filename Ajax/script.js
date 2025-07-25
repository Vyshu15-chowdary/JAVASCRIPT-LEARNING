//fetch data from a server

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){
if(xhr.readyState === 4 && xhr.status === 200){
    const data = JSON.parse(xhr.responseText);
    console.log(data);
}
};

xhr.open('GET','https://example.com/data.json');
xhr.send();