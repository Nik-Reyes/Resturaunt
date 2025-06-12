import { createRegMenu } from "../../components/RegularMenu/regularMenu.js";
import { createSpecials } from "../../components/Specials/special.js";
import "./menu.css";

export function menu() {
  const content = document.querySelector(".content");
  const monthlySpecials = createSpecials();
  const regMenu = createRegMenu();

  content.append(monthlySpecials, regMenu);
}
