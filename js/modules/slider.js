export function initSlider() {
  new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}