const text = [
  "MY Introduce",
  "Tools & Skills",
  "Awards & Credential",
  "Project",
];
const dartClassName = "sectionName";

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class=" ${className} "><div class="sectionName">  ${text[index]} </div></div>`;
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  effect: "coverflow",

  mousewheel: {
    enabled: false, // 초기에 비활성화
  },
});

// 0.5초 후에 마우스 휠 활성화
setTimeout(() => {
  swiper.mousewheel.enable(); // Swiper의 공식 메서드를 사용하여 활성화
}, 750);
