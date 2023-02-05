const h1 = document.getElementById("h1"),
  banner = document.getElementById("banner");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 150) {
    banner.style.scale = "1.2";
    h1.style.scale = ".5";
  } else {
    banner.style.scale = "1";
    h1.style.scale = "1";
  }
};

document.addEventListener("scroll", onScroll);
