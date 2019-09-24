const burger_menu = document.querySelector('.burger-menu');
const mobile_nav = document.querySelector('.mobile-nav');

burger_menu.addEventListener('click', function() {
	mobile_nav.classList.toggle('nav-open');
});
