import { createRegMenu } from "../../components/RegularMenu/regularMenu.js";
import { createSpecials } from "../../components/Specials/special.js";
import { utils } from "../../utils/Helpers/helpers.js";
import "./menu.css";

export function menu() {
  const content = document.querySelector(".content");
  const monthlySpecials = createSpecials();
  const regMenu = createRegMenu();
  const menuWrapper = utils.generateElement("div", "inner-content");
  menuWrapper.append(monthlySpecials, regMenu);

  content.appendChild(menuWrapper);
}
