var link = document.querySelector(".button-open-form");
var popup = document.querySelector(".modal-search");
var form = popup.querySelector(".search-form");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=departure-date]");
var adultAmount = popup.querySelector("[name=adult-amount]");
var childrenAmount = popup.querySelector("[name=children-amount]");
var isStorageSupport = true;
var storageAdultAmount = "";
var storageChildrenAmount = "";

try {
  storageAdultAmount = localStorage.getItem("adultAmount");
  storageChildrenAmount = localStorage.getItem("childrenAmount");
} catch (err) {
  isStorageSupport = false;
}

if (storageAdultAmount) {
    adultAmount.value = storageAdultAmount;
  }
  if (storageChildrenAmount) {
    childrenAmount.value = storageChildrenAmount;
  }

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!arrivalDate.value || !departureDate.value || !adultAmount.value || !childrenAmount.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultAmount", adultAmount.value);
      localStorage.setItem("childrenAmount", childrenAmount.value);
    }
  }
});
