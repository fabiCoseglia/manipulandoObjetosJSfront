window.addEventListener('load', ()=>{

    let main = document.querySelector('main');
    let h2 = document.querySelector('.subtitulo');
    let a = document.querySelector('h2 a');
    let p = document.querySelectorAll('p');
    let body = document.querySelector('body');

    main.style.display='block';

    let user = prompt('cual es tu nombre?');

    user ? h2.innerHTML += `${user}` : h2.innerHTML += `invitado`;
    h2.style.textTransform ='uppercase';

    a.style.color='#E51B3E';

    let fondo = confirm('deseas aplicar un fondo de pantalla?');
    fondo ? body.classList.add('fondo') : null;

   
    for(let i=0; i<p.length; i++){
        if(i % 2 == 0){
            p[i].classList.add('destacadoImpar');
        }else{
            p[i].classList.add('destacadoPar');
        }
    }

    console.log(p)
})