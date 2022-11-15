const modal = document.querySelector('#navbar-mobile #modal');
const icone = document.querySelector('#navbar-mobile i');

icone.addEventListener('click', function(){
    console.log('oui');
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
})