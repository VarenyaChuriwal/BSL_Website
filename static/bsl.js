document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".collapse-button").forEach((button) => {
    button.onclick = () => {
      const gallery = button.nextElementSibling;
      gallery.classList.toggle("collapsible-active");
      //   button.classList.toggle("collapse-button-active");
    };
  });

  document.querySelectorAll(".ref-image").forEach((image) => {
    image.onclick = () => {
      const display =
        image.parentElement.parentElement.parentElement.previousElementSibling
          .previousElementSibling.firstElementChild;
      display.getElementsByClassName("active")[0].classList.toggle("active");
      const ref = image.dataset.reference;
      document.getElementById(ref).classList.toggle("active");
      const focus = display.dataset.display;
      document.getElementById(focus).scrollIntoView();
    };
  });
});

// document.querySelector(".active").classList.toggle("active");
