import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function swiperMenu() {
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
}

export default swiperMenu;
