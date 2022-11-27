var swiper = new Swiper(".images-slider", {
   slidesPerView: 3,
   spaceBetween: 25,
   loop: true,
   navigation: {
      nextEl: '.button-slider__next',
      prevEl: '.button-slider__prev',
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

var swiper = new Swiper(".works__slider", {
   slidesPerView: 1,
   loop: true,
   navigation: {
      nextEl: '.button-slider__next',
      prevEl: '.button-slider__prev',
   },
});

$('.burger, .overlay').on('click', function (e) {
   e.preventDefault()
   $('.burger').toggleClass('burger--x')
   $('.header__top').toggleClass('header__top--open')
   $('.overlay').toggleClass('overlay--show')
});