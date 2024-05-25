/*MENU MOBILE */
const btnMobile = document.querySelector('button.btn-mobile-menu')
function initMenuMobile() {
  if (btnMobile) {
    function toggleMenu() {
      const navMobile = document.querySelector('header nav')
      btnMobile.classList.toggle('active')
      navMobile.classList.toggle('active')
    }
    btnMobile.addEventListener('click', toggleMenu)
  }
}
initMenuMobile()

/*MENU MOBILE */
