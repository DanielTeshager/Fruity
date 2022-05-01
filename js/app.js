// toggle menu on and off
const menu = document.querySelector('header nav');
const menuButton = document.querySelector('header .hamburger-menu-icon');

menuButton.addEventListener('click', () => {
    //toggle css display property
    menu.classList.toggle('hide');
    console.log('clicked');
    });