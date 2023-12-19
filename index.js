const burgerButton = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');
const burgerMenuSpan = document.querySelectorAll('.burger-menu span');

burgerButton.addEventListener('click', () => {
  if (nav.style.height !== '420px') {
    nav.style.height = '420px';
    burgerMenuSpan[0].style.display = 'none';
    burgerMenuSpan[2].style.display = 'none';
  } else {
    nav.style.height = '102px';
    burgerMenuSpan[0].style.display = 'block';
    burgerMenuSpan[2].style.display = 'block';
  }
});

window.addEventListener('resize', () => {
  //   console.log(window.innerWidth);
  if (window.innerWidth > 900) {
    nav.style.height = '102px';
    burgerMenuSpan[0].style.display = 'block';
    burgerMenuSpan[2].style.display = 'block';
  }
});

const prevArrowButton = document.querySelector('.arrow-container .arrow-left');
const nextArrowButton = document.querySelector('.arrow-container .arrow-right');

document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    pagination: false,
    autoWidth: true,
    snap: false,
    drag: 'free',
  });
  splide.mount();
});
