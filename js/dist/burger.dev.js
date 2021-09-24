"use strict";

var humburgerMenu = document.querySelector('.humburger-menu');
var menu = document.querySelector('.menu');

var toggleMenu = function toggleMenu() {
  humburgerMenu.classList.toggle('humburger-menu-active');
  menu.classList.toggle('menu-active');
};

humburgerMenu.addEventListener('click', function () {
  toggleMenu();
});
//# sourceMappingURL=burger.dev.js.map
