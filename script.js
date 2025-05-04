document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupClose = document.querySelector(".popup-close");
  const triggers = document.querySelectorAll(".popup-trigger");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", function () {
      popupImg.src = this.src;
      popup.classList.add("active");
    });
  });

  popupClose.addEventListener("click", function () {
    popup.classList.remove("active");
    popupImg.src = "";
  });

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.classList.remove("active");
      popupImg.src = "";
    }
  });
});
