console.log("Bonjour");
const body = document.querySelector('body');
const title = document.getElementById('title');
const container = document.getElementById('container');
const icone = document.querySelector('i');
const circle = document.getElementById('circle');

container.addEventListener('click', function(){
    console.log('Le container est cliqué !');
    //La couleur est Light, on va passer en Dark.
    if(title.innerText === 'Light-Mode'){
        console.log('Première condition');
        title.innerText = 'Dark-Mode';
        title.style.color = 'white';
        body.classList.toggle('dark-mode');
        icone.classList.toggle('fa-moon');
        circle.classList.toggle('circle-animation');
    }
    //La couleur est Dark, on va passer en Light.
    else{
        console.log('Deuxième condition');
        title.innerText = 'Light-Mode';
        title.style.color = 'black';
        body.classList.toggle('dark-mode');
        icone.classList.toggle('fa-sun');
        circle.classList.toggle('circle-animation');
    }

});