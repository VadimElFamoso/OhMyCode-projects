const subscribe_button = document.querySelector('button');
const icon = document.querySelector('i');

subscribe_button.addEventListener('click', function(){

    subscribe_button.classList.toggle('subscribed');
    icon.classList.toggle('fa-face-smile');
    icon.classList.toggle('icon-subscribed');
    
    if(subscribe_button.innerText === 'Abonné'){
        subscribe_button.innerText = "S'abonner";
        subscribe_button.style.backgroundcolor = '#FF0000';
        
    }
    else{
        subscribe_button.innerText = "Abonné";
    }
    
});