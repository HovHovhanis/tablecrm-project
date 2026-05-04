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


class SliderManager {
  constructor() {
    this.instances = new Map();
    this.configs = [];

    this.media = window.matchMedia('(max-width: 480px)');
    this.media.addEventListener('change', this.handleChange.bind(this));
  }

  register({ selector, pagination, options = {} }) {
    const el = document.querySelector(selector);
    if (!el) return;

    this.configs.push({ selector, pagination, options, el });

    // первая инициализация
    this.toggle({ selector, pagination, options, el });
  }

  handleChange() {
    this.configs.forEach(config => this.toggle(config));
  }

  toggle(config) {
    const { selector, pagination, options, el } = config;
    const isMobile = this.media.matches;
    const instance = this.instances.get(selector);

    if (isMobile && !instance) {
      const slider = new Swiper(el, {
        slidesPerView: "auto",
        spaceBetween: 1.8,
        grabCursor: true,
        loop: false,

        pagination: {
          el: pagination,
          clickable: true,
        },

        ...options
      });

      this.instances.set(selector, slider);
    }

    if (!isMobile && instance) {
      instance.destroy(true, true);
      this.instances.delete(selector);
    }
  }
}

export const sliderManager = new SliderManager();