const warpper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');



registerLink.addEventListener('click', () => {

    warpper.classList.add('active');
});

loginLink.addEventListener('click', () => {

    warpper.classList.remove('active');
});



btnPopup.addEventListener('click', () => {
    warpper.classList.add('active-popup');
});


iconClose.addEventListener('click', () => {
    warpper.classList.remove('active-popup');
});



