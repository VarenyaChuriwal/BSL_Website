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
      const referred_image = document.getElementById(ref);
      referred_image.classList.toggle("active");
      if (!referred_image.src) {
        referred_image.src = referred_image.dataset.source;
      }

      const focus = display.dataset.display;
      document.getElementById(focus).scrollIntoView();
    };
  });

  // Create slideshow for images

  if (document.querySelector(".chosen")) {
    setInterval(function () {
      const current_image = document
        .querySelectorAll(".choose-item.active")
        .forEach((current_image) => {
          var next_image = current_image.nextElementSibling;
          current_image.classList.remove("active");
          if (next_image.id == "first_clone") {
            const first_child = next_image.parentElement.firstElementChild;
            next_image = first_child;
          }
          next_image.classList.add("active");
        });
    }, 5000);
  }

  // Navigate for BSL videos
  const video = document.getElementById("myvideo");
  document.querySelectorAll(".video-nav-item").forEach((item) => {
    item.onclick = () => {
      document.querySelector(".nav-active").classList.remove("nav-active");
      item.classList.add("nav-active");
      var src = item.dataset.src;
      video.src = src;
    };
  });

  //Fade-in landing page
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

  // Lazyload landing page images
  const images = document.querySelectorAll("[data-landsource]");
  const ImageOptions = {
    rootMargin: "200px 0px 200px 0px",
    threshold: 0.4,
  };
  const lazyload = new IntersectionObserver((entries, lazyload) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        let source = entry.target.getAttribute("data-landsource");
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

  // Lazyload gallery images
  document.querySelectorAll(".chosen").forEach((gallery_holder) => {
    setInterval(() => {
      const current_gallery = gallery_holder.querySelector(".active");
      let next_gallery = current_gallery.nextElementSibling;
      if (!next_gallery.hasAttribute("data-source")) {
        next_gallery = next_gallery.parentElement.firstElementChild;
      }
      if (!next_gallery.src) {
        next_gallery.src = next_gallery.dataset.source;
      }
    }, 1000);
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

// const slideshow_options = {
//   rootMargin: "-300px 0px -300px 0px",
//   threshold: 0.75,
// };
// const slideshow = new IntersectionObserver((entries, slideshow) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       // console.log(entry.target);
//       setInterval(function () {
//         const current_image = entry.target.querySelector(".active");
//         // .forEach((current_image) => {
//         var next_image = current_image.nextElementSibling;
//         current_image.classList.remove("active");
//         if (next_image.id == "first_clone") {
//           const first_child = next_image.parentElement.firstElementChild;
//           next_image = first_child;
//         }
//         next_image.classList.add("active");
//         // });
//       }, 50000);
//     }
//   });
// }, slideshow_options);

// document.querySelectorAll(".chosen").forEach((image) => {
//   slideshow.observe(image);
//   // console.log(image);
// });
