import "./style.css";
import { home } from "./pages/Home/home.js";
// import { menu } from "./pages/Menu/menu.js";

home();

const content = document.querySelector(".content");
const homeButton = document.querySelector(
  ".menu-buttons > .list-item:nth-child(1)"
);
const menuButton = document.querySelector(
  ".menu-buttons > .list-item:nth-child(2)"
);
const aboutButton = document.querySelector(
  ".menu-buttons > .list-item:nth-child(3)"
);
const specialsButton = document.querySelector(".ad-button");
specialsButton.addEventListener("click", () => {});

menuButton.addEventListener("click", async () => {
  clearContent();
  const { menu } = await import("./pages/Menu/menu.js");
  menu();
});

homeButton.addEventListener("click", () => {
  clearContent();
  home();
});

const clearContent = () => {
  content.innerText = "";
};
