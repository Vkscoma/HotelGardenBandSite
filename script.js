// Variables
const navToggle = document.querySelector(".nav-toggle");
const hamburgerIcon = document.getElementById("hamburger");
const xIcon = document.getElementById("x-icon");
const navLinks = document.querySelectorAll(".nav__link");

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
