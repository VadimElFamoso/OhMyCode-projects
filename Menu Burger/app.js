const modal = document.querySelector('#navbar-mobile #modal');
const icone = document.querySelector('#navbar-mobile i');
const title = document.querySelector('#navbar-mobile h2');
console.log(modal);
console.log(icone);
console.log(title);

icone.addEventListener('click', function(){
    console.log('oui');
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
    title.classList.toggle('change-text');

})