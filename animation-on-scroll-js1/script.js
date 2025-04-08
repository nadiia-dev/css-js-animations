const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let scrollDistance = window.scrollY;
    let secDistance = sec.offsetTop;

    if (scrollDistance >= secDistance - 150) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
});
