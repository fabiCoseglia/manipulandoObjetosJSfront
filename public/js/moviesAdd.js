window.addEventListener('load',()=>{
    let h1 = document.querySelector('h1');
    let section = document.querySelector('section');
    let article = document.querySelector('article');

    h1.innerHTML = 'AGREGAR PELÍCULAS';
    h1.classList.add('titulo');
    article.classList.add('fondoTransparente');
    section.classList.add('fondoCRUD');
})