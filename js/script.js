/* находим в разметке кнопку клик по которой покажет модальное окно, запишем ее в переменную */
var link = document.querySelector(".button-open-form");
/* находим модальное окно в разметке и записываем его в переменную */
var popup = document.querySelector(".modal-search");
/* находим форму в разметке и записываем её в переменную */
var form = popup.querySelector(".search-form");
/* найдем поля ввода формы */
var arrivalDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=departure-date]");
var adultAmount = popup.querySelector("[name=adult-amount]");
var childrenAmount = popup.querySelector("[name=children-amount]");
/* некоторые браузеры не имеют поддержки localStorage, надо учесть это */
var isStorageSupport = true;
var storageAdultAmount = "";
var storageChildrenAmount = "";

try {
  storageAdultAmount = localStorage.getItem("adultAmount");
  storageChildrenAmount = localStorage.getItem("childrenAmount");
} catch (err) {
  isStorageSupport = false;
}

/* если значение взрослых и детей есть в локальном хранилище, то запишем их в соответствующие поля */
if (storageAdultAmount) {
    adultAmount.value = storageAdultAmount;
  }
  if (storageChildrenAmount) {
    childrenAmount.value = storageChildrenAmount;
  }

/* поймаем событие клика по этой кнопке */
link.addEventListener("click", function (evt) {
  /* отменим стандартное действие при нажатии на неё */
  evt.preventDefault();
  /* добавляем переключатель, чтобы управлять показом формы по нажатию на кнопку */
  popup.classList.toggle("modal-show");
  /* уберем анимацию тряски при закрытии формы */
  popup.classList.remove("modal-error");
});
/* отловим событие отправки формы и отменим его стандартное действие */
form.addEventListener("submit", function(evt) {
  /* отменим отправку форму если какое-то из полей на заполнено */
  if (!arrivalDate.value || !departureDate.value || !adultAmount.value || !childrenAmount.value) {
    /* отменим стандартное действие при нажатии на неё */
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    /* в случае если форма заполнена, то запишем количество взрослых и детей в локальное хранилище */
    if (isStorageSupport) {
      localStorage.setItem("adultAmount", adultAmount.value);
      localStorage.setItem("childrenAmount", childrenAmount.value);
    }
  }
});
