// functionality for menu button

const menu = document.querySelector('#menu')
const navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

// functionality for search button 

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick =() => {
    document.querySelector('#search-form').classList.remove('active');
}

// functionality for accordion 

const accordion = document.getElementsByClassName('content-container');

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

// functionality for the order section

function validate(){
const name = document.querySelector('.name').value
const phone = document.querySelector('.phone').value
const email = document.querySelector('.email').value
const number = document.querySelector('.Number').value
const address = document.querySelector('.address').value

    if(name.trim() == "" || phone.trim() == "" || email.trim() == "" || number.trim() == "" || address.trim() == "" ){

        alert('Please fill in your details')
        return false

    } else if (name.value.length > 0 && phone.value.length > 11 && email.value.length < 0 && number.value.length > 0 && address.value.length > 0){

        alert('Congratulations, Order Successfully placed')

        return true;

    } else{
        alert('Fill in right details')
        return false;
    }
}