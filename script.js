
/**
 * ADD EVENT ON MULTIPPLE ELEMENTS
 */
let addEventOnElements = function (element,eventType,callback) {
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener(eventType,callback)
    }
}
/* mobile nav */ 
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('[data-nav-link]');
let navToggler = document.querySelector('.nav-toggle-btn');

let toggleNav = function () {
    navbar.classList.toggle('active');
    this.classList.toggle('active');
}
navToggler.addEventListener('click', toggleNav) ;

let navClose  = () => {
    navbar.classList.remove('active');
    navToggler.classList.remove('active');
}
addEventOnElements(navLinks,'click', navClose);

/**
 *  HEADER ACTIVE AFTER 100PX 
 */

let headerActive = () => {
    if (window.scrollY > 100) {
    document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}
window.addEventListener('scroll',headerActive);

/**
 * -  BUTTON HOVER RippLE EFFECT
 */

let btns = document.querySelectorAll(".btn");

let btnRippleHover = function (event) {
    this.style.setProperty("--top", `${event.offsetY}px`);
    this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(btns, 'mousemove', btnRippleHover);


/*
    -  SCROLL TOP BTN
*/ 

let scrollBtn = document.querySelector('.back-top-btn');

let scrollActive = () => {
    if (window.scrollY > 300) {
    scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
}
window.addEventListener('scroll',scrollActive);


/*
    -  SCROLL REVEAL
*/ 

let revealElement = document.querySelectorAll("[data-reveal]");

let revealElementOnScroll = function () {
    for (let i = 0; i < revealElement.length; i++) {
        let elementInsideWindow = revealElement[i].getBoundingClientRect().top < window.innerHeight / 1.2 ;
        if(elementInsideWindow) {
            revealElement[i].classList.add("revealed");
        }
    }
}

window.addEventListener('scroll', revealElementOnScroll);
window.addEventListener('load', revealElementOnScroll);