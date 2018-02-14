//Elementos del DOM que utilizaremos
const form = document.getElementById('search');
const label = document.getElementById('search-label');
const input = document.getElementById('search-keyword');
const inputBtn = document.getElementById('submit-btn');
const div = document.getElementById('response');
const ul = document.getElementById('response-container');
let  searchText ;

//realizando el evento y dentro de ella llamamos a la funcion getNews
form.addEventListener('submit',function(event){
event.preventDefault;
div.innerHTML = '';
searchText = input.value;
getNew();
});


function getNew() {

}