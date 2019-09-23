// MOBILE NAVIGATION FUNCTIONALITY
const burger_menu = document.querySelector('.burger-menu');
const mobile_menu = document.querySelector('#mobile-menu');

function check_mobile_menu() {
	if (mobile_menu.classList == 'menu-closed') {
		mobile_menu.classList.remove('menu-closed');
		mobile_menu.classList.add('menu-open');
	} else {
		mobile_menu.classList.remove('menu-open');
		mobile_menu.classList.add('menu-closed');
	}
}

burger_menu.addEventListener('click', check_mobile_menu);
