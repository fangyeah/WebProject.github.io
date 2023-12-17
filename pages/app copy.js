//creating mobile menu
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

//display Moblie  Menu
const moblieMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click',moblieMenu)

//Animate

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-motivation', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3

});

gsap.from('.animate-services', {
    ScrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 1,
    y: -150,
    stagger: 0.12

});

gsap.from('.animate-img', {
    ScrollTrigger: '.animate-services',
    duration: 1.2,
    opacity: 0,
    x: -200,

});

gsap.from('.animate-movement', {
    ScrollTrigger: '.animate-movement',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay:0.5

});

gsap.from('.animate-card', {
    ScrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay:0.2

});

