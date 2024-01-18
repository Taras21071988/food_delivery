function panAct() {
  let panelItem = document.querySelectorAll(".faq__descr-item");
  let activeq = document.getElementsByClassName("activePanel");

  Array.from(panelItem).forEach(function (items, i, panelItem) {
    items.addEventListener("click", function (e) {
      if (activeq.length > 0 && activeq[0] !== this)
        // если есть активный элемент, и это не тот по которому кликнули
        activeq[0].classList.remove("activePanel"); // убрать класс panel-active

      // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
      this.classList.toggle("activePanel");
    });
  });
}

export default panAct;
