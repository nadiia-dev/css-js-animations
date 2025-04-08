const text = document.querySelector("h2");
const spans = text.innerText
  .split("")
  .map(
    (letter, index) =>
      `<span style="transition-delay:${index * 40}ms; filter:hue-rotate(${
        index * 30
      }deg)">${letter}</span>`
  )
  .join("");

text.innerHTML = spans;
