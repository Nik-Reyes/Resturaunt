export default function () {
  const container = document.createElement("div");
  const span = document.createElement("span");
  container.className = "container";
  span.className = "specials-text";
  span.innerText = "Special";
  container.appendChild(span);
  const content = document.querySelector(".content");
  content.appendChild(container);
  console.log("here");
}
