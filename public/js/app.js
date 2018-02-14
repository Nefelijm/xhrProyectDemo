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

//Funcion donde crearemos nuestra peticiones
function getNew() {
//Instanciando nuestro objeto
const articleRequest = new XMLHttpRequest();
//Abriendo la peticion
    articleRequest.open('GET','https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchText}&api-key=91e23984f8e5409081ea47215e9e61c3');
//onload cuando la peticion esta con exito
    articleRequest.onload = addNews;
//onerror cuando la peticion falla
    articleRequest.onerror = handleError;
//Enviando las peticiones
    articleRequest.send();
}

