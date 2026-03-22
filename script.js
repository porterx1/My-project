$(document).ready(function () {
  $(".expand-btn").click(function () {
    $(".expandable").toggleClass("hidden");

    if ($(".expandable").hasClass("hidden")) {
      $(this).text("ЕЩЕ");
    } else {
      $(this).text("СКРЫТЬ");
    }
  });
});

const slider = document.querySelector(".reviews-track");
const cards = document.querySelectorAll(".review-card");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
  slider.style.transition = "0.4s ease";
}

next.onclick = () => {
  index = (index + 1) % cards.length;
  updateSlider();
};

prev.onclick = () => {
  index = (index - 1 + cards.length) % cards.length;
  updateSlider();
};
