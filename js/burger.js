const humburgerMenu = document.querySelector('.humburger-menu')
const menu = document.querySelector('.menu')

const toggleMenu = () => {
  humburgerMenu.classList.toggle('humburger-menu-active')
  menu.classList.toggle('menu-active')
}
humburgerMenu.addEventListener('click', () => {
  toggleMenu()
})