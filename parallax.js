const h1 = document.getElementById("h1"),
  banner = document.getElementById("banner");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 150) {
    banner.style.backgroundSize = "100%";
    h1.style.scale = "0.9";
    h1.style.opacity = 0.5;
  } else {
    banner.style.backgroundSize = "120%";
    h1.style.scale = 1;
    h1.style.opacity = 1;
  }
};

document.addEventListener("scroll", onScroll);
