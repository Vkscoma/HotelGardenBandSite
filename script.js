// Variables
const navToggle = document.querySelector(".nav-toggle");
const hamburgerIcon = document.getElementById("hamburger");
const xIcon = document.getElementById("x-icon");
const navLinks = document.querySelectorAll(".nav__link");
const hiddenElements = document.querySelectorAll(".hidden");
const mobileNavFix = document.querySelector(".nav-container");

//event listener
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  mobileNavFix.classList.remove("opacity-mobile-class");

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
        status.textContent = "Thanks for your submission!";
        status.classList.add("success");
        form.reset();
      } else if (honeyPot.value !== "") {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.textContent = data["errors"];
            status.classList
              .add("error")
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.textContent = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.textContent = "Oops! There was a problem submitting your form";
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
