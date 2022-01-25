document.addEventListener('DOMContentLoaded', function() {

    traer();
})



let imagen = document.querySelector('.usuario');
let info = document.querySelector('.nombre');



function traer() {
    fetch('https://randomuser.me/api/')
        .then(data => data.json())
        .then(data => {


            imagen.innerHTML = `<img  src="${data.results[0].picture.large}" alt="usuario">`
            info.textContent = `- ${data.results[0].name.first} ${data.results[0].name.last}`




        })
}




function menu() {


    navegacionResponsive();
};


function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');


    if (navegacion.classList.contains('nodisplay')) {

        navegacion.classList.remove('nodisplay');

        navegacion.classList.add('display')

    } else {

        navegacion.classList.toggle('display');
        navegacion.classList.add('nodisplay');
    }

}