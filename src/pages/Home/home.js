import { heroSection } from "../../components/Hero/hero.js";
import { utils } from "../../utils/Helpers/helpers.js";
import "./home.css";

export function home() {
  const homeWrapper = utils.generateElement("div", "homepage-wrapper");
  const content = document.querySelector(".content");
  homeWrapper.appendChild(heroSection());

  content.appendChild(homeWrapper);
}
