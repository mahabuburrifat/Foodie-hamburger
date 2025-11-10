const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const closeIcon = document.querySelector('.close-icon');
const btnText = document.querySelector('.btn-text');
const nav = document.querySelector('nav')



// hamburger open event
hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburgerIcon.parentElement.classList.add('menu-open');
})


// hamburger close event
closeIcon.addEventListener('click', () => {
    hamburgerIcon.parentElement.classList.remove('menu-open');
})


// window click close hamburger event
window.addEventListener('click', () => {
    hamburgerIcon.parentElement.classList.remove('menu-open');
})


// without nav click and close hamburger
nav.addEventListener('click', (e) => {
    e.stopPropagation();
})

