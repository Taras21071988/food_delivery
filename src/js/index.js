// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
import panAct from "./modules/activePanel";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

// var panelbtn = document.querySelectorAll(".faq__chapter-items"),
//   active = document.getElementsByClassName("activ");

// Array.from(panelbtn).forEach(function (item, i, panelbtn) {
//   item.addEventListener("click", function (e) {
//     if (active.length > 0 && active[0] !== this)
//       // если есть активный элемент, и это не тот по которому кликнули
//       active[0].classList.remove("activ"); // убрать класс panel-active

//     // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
//     this.classList.add("activ");

//   });
// });

panAct();
