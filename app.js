// MOBILE MENU FUNCTIONALITY
const burger_menu = document.querySelector('#burger-menu');
const mobile_menu = document.querySelector('#mobile-menu');

burger_menu.addEventListener('click', function() {
    if (mobile_menu.classList == 'menu-closed') {
        // open mobile menu
        mobile_menu.classList.remove('menu-closed');
        mobile_menu.classList.add('menu-opened');

        // remove burger menu icon
        burger_menu.childNodes[1].classList.remove('fa-bars');
        // add exit icon
        burger_menu.childNodes[1].classList.add('fa-times');
    } else {
        // close mobile menu
        mobile_menu.classList.remove('menu-opened');
        mobile_menu.classList.add('menu-closed');

        burger_menu.childNodes[1].classList.remove('fa-times');
        burger_menu.childNodes[1].classList.add('fa-bars');
    }
});