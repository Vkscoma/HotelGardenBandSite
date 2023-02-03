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
  } else {
    hamburgerIcon.style.display = "block";
    xIcon.style.display = "none";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
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
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        status.classList.add("success");
        form.reset();
      } else {
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
