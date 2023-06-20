if(document.querySelector('.catalog-slider__inner')) {

  const catalogSlider = new Swiper('.catalog-slider__inner', {
    // Optional parameters
        direction: 'vertical',
        slidesPerView: 9,
        spaceBetween: 20,
        updateOnWindowResize: true,
        loop: true,
        lazy: true,
        zoom: true,
        effect: 'slide',
        autoplay: {
          delay: 3000
            },
        speed: 1500
        // breakpoints: {
        //   1150: {
        //     slidesPerView: 9
        //   }
        // },
  });


  const catalogSliderNext = document.querySelector('.catalog-slider__arr-top');
  const catalogSliderPrev = document.querySelector('.catalog-slider__arr-bottom');


  catalogSliderPrev.addEventListener('click', () => {
    catalogSlider.slidePrev();
  });

  catalogSliderNext.addEventListener('click', () => {
    catalogSlider.slideNext();
  });

}

if(document.querySelector('.catalog-slider__inner--mob')) {

  const catalogSlider = new Swiper('.catalog-slider__inner--mob', {
    // Optional parameters
        slidesPerView: 3.5,
        spaceBetween: 5,
        updateOnWindowResize: true,
        freeMode: true,
        loop: true,
        lazy: true,
        zoom: true,
        effect: 'slide',
        autoplay: {
          delay: 3000
            },
        speed: 1500,
        breakpoints: {
          600: {
            slidesPerView: 5.5,
            spaceBetween: 10
          }
        },
  });



}


// const promoSlider = new Swiper('.promo-slider', {
//   // Optional parameters
//       slidesPerView: 2,
//       spaceBetween: 20,
//       updateOnWindowResize: true,
//       loop: true,
//       lazy: true,
//       zoom: true,
//       effect: 'slide',
//       autoplay: {
//         delay: 4000
//           },
//       speed: 1500,
//       breakpoints: {
//         900: {
//           direction: 'horizontal'
//         },
//         300: {
//           direction: 'vertical'
//         },
//       },
// });


if(document.querySelector('.spoiler')) {
  spoiler();
}

function spoiler() {
  const products = document.querySelectorAll('.product');
  const spoiler = document.querySelector('.spoiler');

  if(products.length > 4) {
    for(let i = 4; i < products.length; i++) {
      products[i].classList.add('hidden');
  }
}

}