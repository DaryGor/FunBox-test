// Форматирование картинок в WebP
export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}

// Состояние наведение к выбранной упаковке
export function selectedHover() {
  const catalog = document.querySelector(".catalog__list");

  catalog.querySelectorAll(".catalog__item").forEach((item) => {
    item.addEventListener("click", function () {
      const card = item.querySelector(".card");
      card.classList.remove("card--selected_hover");
    });

    item.addEventListener("mouseout", function () {
      item.querySelector(".card").classList.add("card--selected_hover");
    });
  });
}
