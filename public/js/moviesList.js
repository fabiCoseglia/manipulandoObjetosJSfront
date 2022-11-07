window.addEventListener('load',()=>{
    let body = document.querySelector('body');
    let h1 = document.querySelector('h1');

    let darkMode = confirm('deseas usar modo oscuro?');

    if(darkMode){
        body.style.backgroundColor='#7f7f7f';
        body.classList.add('fondoMoviesList');
    }

    h1.innerHTML ='LISTADO DE PELICULA';
    h1.style.color = 'white';
    h1.style.backgroundColor = 'teal';
    h1.style.fontSize = '20px';

})