const text = document.getElementById("text");
const leaf = document.getElementById("leaf");
const hill1 = document.getElementById("hill1");
const hill5 = document.getElementById("hill5");
const hill4 = document.getElementById("hill4");

window.addEventListener("scroll", () => {
  let val = window.scrollY;

  text.style.marginTop = `${val * 2.5}px`;
  leaf.style.top = `${val * -1.5}px`;
  leaf.style.left = `${val * 1.5}px`;
  hill5.style.left = `${val * 1.5}px`;
  hill4.style.left = `${val * -1.5}px`;
  hill1.style.top = `${val * 1}px`;
});
