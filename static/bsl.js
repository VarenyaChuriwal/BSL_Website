document.addEventListener("DOMContentLoaded", function () {
  // Activate collapsible
  document.querySelectorAll(".collapse-button").forEach((button) => {
    button.onclick = () => {
      const gallery = button.nextElementSibling;
      const arrow = button.children[1];
      gallery.classList.toggle("collapsible-active");
      arrow.classList.toggle("active");
    };
  });

  // Choose picture to view
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

  // Navigate for BSL videos
  const video = document.getElementById("myvideo");
  if (video) {
    document.addEventListener("click", () => {
      video.play();
    });
  }
  document.querySelectorAll(".video-nav-item").forEach((item) => {
    item.onclick = () => {
      document.querySelector(".nav-active").classList.remove("nav-active");
      item.classList.add("nav-active");
      var src = item.dataset.src;
      video.src = src;
    };
  });

  // Intersection Observer for Landing page
  const sliders = document.querySelectorAll(".slider");
  const options = {
    rootMargin: "-150px 0px -200px 0px",
  };
  appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove("appear");
      } else {
        entry.target.classList.add("appear");
      }
    });
  }, options);

  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });

  // Lazyload images
  const images = document.querySelectorAll("[data-source]");
  const ImageOptions = {
    rootMargin: "100px 0px 100px 0px",
  };
  const lazyload = new IntersectionObserver((entries, lazyload) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        let source = entry.target.getAttribute("data-source");
        entry.target.src = source;
        lazyload.unobserve(entry.target);
      }
    });
  }, ImageOptions);

  images.forEach((image) => {
    lazyload.observe(image);
  });

  // Lazyload reference images
  const image_referrer = document.querySelectorAll("[data-RefSource]");
  const ref_load = new IntersectionObserver((entries, ref_load) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        let style = entry.target.getAttribute("data-RefSource");
        entry.target.style.backgroundImage = `url(${style})`;
        ref_load.unobserve(entry.target);
      }
    });
  }, ImageOptions);

  image_referrer.forEach((image) => {
    ref_load.observe(image);
  });

  // Allow videos to play in sequence
  if (video) {
    video.onended = () => {
      var active_item = document.querySelector(".nav-active");
      var next_item = active_item.nextElementSibling;
      if (next_item.id == "first-clone") {
        next_item = document.getElementById("first-element");
      }
      active_item.classList.remove("nav-active");
      next_item.classList.add("nav-active");
      video.src = next_item.dataset.src;
    };
  }
});
