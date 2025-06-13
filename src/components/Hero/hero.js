import { utils } from "../../utils/Helpers/helpers";
import heroImg from "../../assets/images/hero.jpg";
import "./hero.css";

export function heroSection() {
  const heroWrapper = utils.generateElement("div", "hero-wrapper");
  const heroImageWrapper = utils.generateElement("div", "hero-img-wrapper");
  const heroSpecialAd = utils.generateElement("div", "special-advertisement");
  const specialAdTitle = utils.generateElement(
    "p",
    "ad-title",
    "New Summer Flavors"
  );
  const specialAdsubtitle = utils.generateElement(
    "p",
    "ad-subtitle",
    "Summer is here, and with it, limited edition pies!"
  );
  const specialAdBtn = utils.generateElement("button", "ad-button");
  const specialAdBtnTxt = utils.generateElement(
    "span",
    "ad-btn-text",
    "See Specials "
  );
  const heroImage = utils.generateElement("img", "hero-img", heroImg);
  const shortStoryOuter = utils.generateElement("div", "short-story-outer");
  const shortStoryInner = utils.generateElement("div", "short-story-inner");
  const heroTitle = utils.generateElement(
    "p",
    "hero-title",
    "Baking Smiles since 1957"
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
    "Read More"
  );

  specialAdBtn.appendChild(specialAdBtnTxt);
  heroSpecialAd.append(specialAdTitle, specialAdsubtitle, specialAdBtn);
  shortStoryInner.append(heroTitle, heroSubtitle, buttonWrapper);
  storyButton.appendChild(storyButtonText);
  buttonWrapper.appendChild(storyButton);
  shortStoryOuter.appendChild(shortStoryInner);
  heroImageWrapper.append(heroSpecialAd, heroImage);
  heroWrapper.append(heroImageWrapper, shortStoryOuter);

  return heroWrapper;
}
