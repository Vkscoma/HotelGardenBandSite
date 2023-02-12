// Variables
const navToggle = document.querySelector(".nav-toggle");
const hamburgerIcon = document.getElementById("hamburger");
const xIcon = document.getElementById("x-icon");
const navLinks = document.querySelectorAll(".nav__link");
const hiddenElements = document.querySelectorAll(".hidden");

//event listener
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");

  if (xIcon.style.display === "none") {
    hamburgerIcon.style.display = "none";
    xIcon.style.display = "block";
    document.body.classList.add("hide-overflow");
  } else {
    hamburgerIcon.style.display = "block";
    xIcon.style.display = "none";
    document.body.classList.remove("hide-overflow");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    document.body.classList.remove("hide-overflow");
    hamburgerIcon.style.display = "block";
    xIcon.style.display = "none";
  });
});

// Animation JS

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((element) => {
  observer.observe(element);
});

//Form JS
const form = document.getElementById("my-form");
const honeyPot = document.getElementById("honeypot");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok && honeyPot.value === "") {
        status.innerHTML = "Thanks for your submission!";
        status.classList.add("success");
        form.reset();
      } else if (honeyPot.value !== "") {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"];
            status.classList
              .add("error")
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

// JS for event page
const eventRow = document.querySelectorAll(".event-row");

eventRow.forEach((row) => {
  row.addEventListener("click", () => {
    if (row.dataset.href) {
      window.open(row.dataset.href);
    }
  });
});

// JS for Article Photos
// Select each article elements
const articles = document.querySelectorAll(".article");

// Loop through each article and add an animation when hovered
articles.forEach(function (article) {
  article.addEventListener("mouseenter", function () {
    article.style.transform = "scale(1.2)";
    article.style.zIndex = "5";
  });
  article.addEventListener("mouseleave", function () {
    article.style.transform = "scale(1)";
  });
});

// Photo Gallery
const hero = document.querySelector(".hero");
const images = document.querySelectorAll(".hero-image:not(.mobile)");
const mobileImages = document.querySelectorAll(".hero-image.mobile");
let heroIndex = 0;

function swapImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  images[heroIndex].classList.add("active");
  heroIndex = (heroIndex + 1) % images.length;
}

let mobileIndex = 0;

function swapMobileImages() {
  for (let i = 0; i < mobileImages.length; i++) {
    mobileImages[i].classList.remove("active");
  }
  mobileImages[mobileIndex].classList.add("active");
  mobileIndex = (mobileIndex + 1) % mobileImages.length;
}

setInterval(swapImage, 5000);
setInterval(swapMobileImages, 5000);
