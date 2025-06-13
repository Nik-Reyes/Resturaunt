import { heroSection } from "../../components/Hero/hero.js";
import "./home.css";

export function home() {
  const content = document.querySelector(".content");
  console.log(content);
  content.appendChild(heroSection());
}
