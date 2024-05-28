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
/*ACCORDION */
const accordion = document.querySelectorAll('.accordion')
function initAccordion() {
  if (accordion) {
    accordion.forEach(item => {
      const question = item.querySelector('.question')
      const answer = item.querySelector('.answer')

      answer.style.maxHeight = 0

      question.addEventListener('click', () => {
        if (item.classList.contains('open')) {
          answer.style.maxHeight = 0
          item.classList.remove('open')
        } else {
          answer.style.maxHeight =
            answer.querySelector('.content').scrollHeight + 'px'
          item.classList.add('open')
        }
      })
    })
  }
}
initAccordion()
/*END ACCORDION */
/*SWIPER */
const swiperApp = new Swiper('.swiper-app .swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-app .button-next',
    prevEl: '.swiper-app .button-prev'
  }
})
const swiperComments = new Swiper('.swiper-comments .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-comments .button-next',
    prevEl: '.swiper-comments .button-prev'
  },
  breakpoints: {
    992: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
})
/*SWIPER */
