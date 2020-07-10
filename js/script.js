var IndexButtonFormClose = document.querySelector(".index-button-form");
var ItemIndexForm = document.querySelector(".item-index-form");
IndexButtonFormClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    ItemIndexForm.classList.add("item-index-form-show");
});