const swiper = new Swiper('.main-slider', {

  loop: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  speed: 1200,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },



});