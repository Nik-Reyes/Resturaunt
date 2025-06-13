import { utils } from "../../utils/Helpers/helpers";
import heroImg from "../../assets/images/hero.jpg";
import "./hero.css";

export function heroSection() {
  const heroWrapper = utils.generateElement("div", "hero-wrapper");
  const heroImageWrapper = utils.generateElement("div", "hero-img-wrapper");
  const heroImage = utils.generateElement("img", "hero-img", heroImg);
  const heroTextOuter = utils.generateElement("div", "hero-text-outer");
  const heroTextInner = utils.generateElement("div", "hero-text-inner");
  const heroTitle = utils.generateElement(
    "p",
    "hero-title",
    "Baking Smiles since 1957, where every day is pie day"
  );
  const heroSubtitle = utils.generateElement(
    "p",
    "hero-subtitle",
    "We've been perfecting the art of pie-making for generations, and we're passionate about doing it right. From buttery crusts to fresh fruit fillings, we believe great pie brings people together—whether it's Sunday dinner or Tuesday afternoon comfort food. That's the magic we've been sharing with LA families for decades."
  );
  const buttonWrapper = utils.generateElement("div", "story-button-wrapper");
  const storyButton = utils.generateElement("button", "story-button");
  const storyButtonText = utils.generateElement(
    "span",
    "story-button-text",
    "Our Story"
  );

  heroTextInner.append(heroTitle, heroSubtitle);
  storyButton.appendChild(storyButtonText);
  buttonWrapper.appendChild(storyButton);
  heroTextOuter.append(heroTextInner, buttonWrapper);
  heroImageWrapper.appendChild(heroImage);
  heroWrapper.append(heroImageWrapper, heroTextOuter);

  return heroWrapper;
}
