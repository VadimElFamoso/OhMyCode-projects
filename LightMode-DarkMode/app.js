console.log("Bonjour");
const body = document.querySelector('body');
const title = document.getElementById('title');
const container = document.getElementById('container');
const icone = document.querySelector('i');
const circle = document.getElementById('circle')


container.addEventListener('click', function(){
    
    body.classList.toggle('dark-mode');
    icone.classList.toggle('fa-moon');
    circle.classList.toggle('circle-animation');
    
    
    //La couleur est Light, on va passer en Dark.
    if(title.innerText === 'Light-Mode'){
        title.innerText = 'Dark-Mode';
        title.style.color = 'white';
        container.style.backgroundColor = '#93de87';
    }
    //La couleur est Dark, on va passer en Light.
    else{
        title.innerText = 'Light-Mode'
        title.style.color = 'black';
        container.style.backgroundColor = '#333030';
    }
});