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
      let ref = image.dataset.reference;
      document.querySelector(".active").classList.toggle("active");
      document.getElementById(ref).classList.toggle("active");
      document.getElementById("factory").scrollIntoView();
    };
  });
});
