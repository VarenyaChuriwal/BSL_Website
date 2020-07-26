document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".collapse-button").forEach((button) => {
    button.onclick = () => {
      const gallery = button.nextElementSibling;
      const arrow = button.children[1];
      gallery.classList.toggle("collapsible-active");
      arrow.classList.toggle("active");
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

// test = new Inter();
// (function () {
//   var elements;
//   var windowHeight;

//   function init() {
//     elements = document.querySelectorAll(".hidden");
//     windowHeight = window.innerHeight;
//   }

//   function checkPosition() {
//     for (var i = 0; i < elements.length; i++) {
//       var element = elements[i];
//       var positionFromTop = elements[i].getBoundingClientRect().top;

//       if (positionFromTop - windowHeight <= 0) {
//         element.classList.add("fade-in-element");
//         element.classList.remove("hidden");
//       }
//     }
//   }

//   window.addEventListener("scroll", checkPosition);
//   window.addEventListener("resize", init);

//   init();
//   checkPosition();
// })();

// document.querySelector(".active").classList.toggle("active");
