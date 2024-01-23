import swiperMenu from "./modules/swiper";

let panelItem = document.querySelectorAll(".faq__descr-item");
let active = document.getElementsByClassName("activePanel");

Array.from(panelItem).forEach(function (items, i, panelItem) {
  items.addEventListener("click", function (e) {
    if (active.length > 0 && active[0] !== this)
      active[0].classList.remove("activePanel");
    this.classList.toggle("activePanel");
  });
});

const showTab = (elTabBtn) => {
  const elTab = elTabBtn.closest(".faq__wrapper");
  if (elTabBtn.classList.contains("activ")) {
    return;
  }
  const targetId = elTabBtn.dataset.targetId;
  const elTabPane = elTab.querySelector(`.faq__descr[data-id="${targetId}"]`);
  if (elTabPane) {
    const elTabBtnActive = elTab.querySelector(".activ");
    elTabBtnActive.classList.remove("activ");
    const elTabPaneShow = elTab.querySelector(".selected");
    elTabPaneShow.classList.remove("selected");
    elTabBtn.classList.add("activ");
    elTabPane.classList.add("selected");
  }
};

document.addEventListener("click", (e) => {
  if (e.target && !e.target.closest(".faq__chapter-items")) {
    return;
  }
  const elTabBtn = e.target.closest(".faq__chapter-items");
  showTab(elTabBtn);
});

let li = document.querySelectorAll("li");
for (let i = 0, len = li.length; i < len; i++) {
  li[i].style.animationDelay = i / 10.333 + "s";
}

swiperMenu();
