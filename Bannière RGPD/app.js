const container_h1 = document.querySelector('#container h1');
const container_h2 = document.querySelector('#container h2');
const container_gif = document.querySelector('#container img');
const rgpd_container = document.querySelector('#rgpd_container');
const accept_button = document.querySelector('#rgpd_container button:first-of-type');
const deny_button = document.querySelector('#rgpd_container button:last-of-type');


//Acceptation du RGPD :
accept_button.addEventListener('click', function(){
    rgpd_container.style.opacity = '0';
    container_gif.style.opacity = '0';
    container_h1.innerText = 'Merci !';
    container_h2.innerText = 'Vous avez bien accepté la RGPD, nous vous en remercions !';
});

//Refus du RGPD :
deny_button.addEventListener('click', function(){
    rgpd_container.style.opacity = '0';
    container_gif.style.opacity = '0';
    container_h1.innerText = 'Merci !';
    container_h2.innerText = 'Vous avez bien refusé la RGPD, nous vous en remercions !';

    
});