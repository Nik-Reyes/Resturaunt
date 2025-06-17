import { home } from "./pages/Home/home.js";
import { menu } from "./pages/Menu/menu.js";
import "./style.css";

const pageHandler = (() => {
  let specialsButton = null;
  let previousPage = null;
  let currentPage = "home";
  const content = document.querySelector(".content");
  const homeButton = document.querySelector(
    ".menu-buttons > .list-item:nth-child(1)"
  );
  const menuButton = document.querySelector(
    ".menu-buttons > .list-item:nth-child(2)"
  );

  const clearContent = () => {
    content.innerText = "";
  };

  const assignEventListeners = (elements) => {
    for (const value of Object.values(elements)) {
      console.log(value);
      if (previousPage === currentPage) {
        continue;
      } else {
        console.log("add listener");
        value.el.addEventListener(value.type, value.func);
      }
    }
  };

  const updatePage = (newPage) => {
    previousPage = currentPage;
    content.classList.remove(currentPage);
    currentPage = newPage;
    content.classList.add(currentPage);

    console.log(`previous page: ${previousPage}\ncurrent page: ${currentPage}`);
  };

  const clickMenu = () => {
    menu();
    updatePage("menu");
  };

  const clickHome = () => {
    home();
    updatePage("home");
    specialsButton = document.querySelector(".ad-button");
    if (previousPage !== currentPage) {
      assignEventListeners({
        special: {
          el: specialsButton,
          type: "click",
          func: () => {
            clearContent();
            clickMenu();
          },
        },
      });
    }
  };

  const initialize = (() => {
    // start homepage
    home();
    specialsButton = document.querySelector(".ad-button");

    // set event listener states for all home buttons
    assignEventListeners({
      special: {
        el: specialsButton,
        type: "click",
        func: () => {
          clearContent();
          clickMenu();
        },
      },
    });

    // apply home class
    content.classList.add(currentPage);
    // make the starting page (homepage) the previous page for conditionals
    previousPage = currentPage;

    menuButton.addEventListener("click", () => {
      clearContent();
      clickMenu();
    });

    homeButton.addEventListener("click", () => {
      clearContent();
      clickHome();
    });
  })();
})();
