var swiper = new Swiper(".images-slider", {
   slidesPerView: 3,
   spaceBetween: 25,
   loop: true,
   autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: true,
   },
   navigation: {
      nextEl: '.button-slider__next--gallery',
      prevEl: '.button-slider__prev--gallery',
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      450: {
         slidesPerView: 2,
      },
      900: {
         slidesPerView: 3,
      },
   }
});

var swiper = new Swiper(".works__slider--up", {
   slidesPerView: 1,
   loop: true,
   navigation: {
      nextEl: '.button-slider__next--up',
      prevEl: '.button-slider__prev--up',
   },
   autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: true,
   },
});

var swiper = new Swiper(".works__slider--bottom", {
   slidesPerView: 1,
   loop: true,
   navigation: {
      nextEl: '.button-slider__next--bottom',
      prevEl: '.button-slider__prev--bottom',
   },
   autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: true,
   },
});

$('.burger, .overlay').on('click', function (e) {
   e.preventDefault()
   $('.burger').toggleClass('burger--x')
   $('.header__top').toggleClass('header__top--open')
   $('.overlay').toggleClass('overlay--show')
});