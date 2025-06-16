import { heroSection } from "../../components/Hero/hero.js";
import { signup } from "../../components/SignUp/signUp.js";
import { utils } from "../../utils/Helpers/helpers.js";
import "./home.css";

export function home() {
  const homeWrapper = utils.generateElement("div", "homepage-wrapper");
  const content = document.querySelector(".content");
  homeWrapper.append(heroSection(), signup());

  content.appendChild(homeWrapper);
}
