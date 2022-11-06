console.log("Bonjour");
const body = document.querySelector('body');
const title = document.getElementById('title');
const container = document.getElementById('container');
const icone = document.querySelector('i');
const circle = document.getElementById('circle');

container.addEventListener('click', function(){
    if(title.innerText === 'Light-Mode'){
        title.innerText = 'Dark-mode';
        body.classList.toggle('dark-mode');
        icone.style.color = 'black';
        circle.classList.toggle('circle-animation');
    }
    else{
        title.innerText = 'Light-Mode';
        body.classList.toggle('dark-mode');
        icone.style.color = 'white';
        circle.classList.toggle('circle-animation');
    }

});