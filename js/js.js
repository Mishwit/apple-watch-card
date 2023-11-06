function changeModelColor(color, circle) {
  // Убираем класс "active" у всех кнопок
  let colorCircles = document.querySelectorAll(".color-circle");
  colorCircles.forEach(function (element) {
    element.classList.remove("active");
  });

  // Добавляем класс "active" к нажатой кнопке
  circle.classList.add("active");

  // Здесь можно добавить код для изменения цвета модели

  let images = {
    white: [
      "./img/apple-watch-se-2022-1-white-big.png",
      "./img/apple-watch-se-2022-2-white-big.png",
      "./img/apple-watch-se-2022-3-white-big.png",
    ],
    black: [
      "./img/apple-watch-se-2022-1-black-big.png",
      "./img/apple-watch-se-2022-2-black-big.png",
      "./img/apple-watch-se-2022-3-black-big.png",
    ],
    beige: [
      "./img/apple-watch-se-2022-1-beige-big.png",
      "./img/apple-watch-se-2022-2-beige-big.png",
      "./img/apple-watch-se-2022-3-beige-big.png",
    ],
  };

  let swiperSlides = document.querySelectorAll(".mySwiper .swiper-slide img");
  images[color].forEach(function (imgSrc, index) {
    swiperSlides[index].src = imgSrc;
  });
}

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      updateBulletImages(this);
    },
  },
});

function updateBulletImages(swiper) {
  let bulletImages = [
    "./img/apple-watch-se-2022-1.png",
    "./img/apple-watch-se-2022-2.png",
    "./img/apple-watch-se-2022-3.png",
  ];

  const white = [
    "./img/apple-watch-se-2022-1-white-big.png",
    "./img/apple-watch-se-2022-2-white-big.png",
    "./img/apple-watch-se-2022-3-white-big.png",
  ];

  const black = [
    "./img/apple-watch-se-2022-1-black-big.png",
    "./img/apple-watch-se-2022-2-black-big.png",
    "./img/apple-watch-se-2022-3-black-big.png",
  ];

  const beige = [
    "./img/apple-watch-se-2022-1-beige-big.png",
    "./img/apple-watch-se-2022-2-beige-big.png",
    "./img/apple-watch-se-2022-3-beige-big.png",
  ];

  let bullets = swiper.pagination.bullets;

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].innerHTML =
      '<span class="swiper-pagination-bullet-inner"><img src="' +
      bulletImages[i] +
      '" class="pagination-bullet"/></span>';
  }
}
