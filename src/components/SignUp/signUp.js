import { utils } from "../../utils/Helpers/helpers.js";
import "./signUp.css";

export function signup() {
  const title = utils.generateElement("div", "signup-title");
  const titleText = utils.generateElement(
    "p",
    "title-text",
    "Sign up for our tasty newsletter"
  );

  title.appendChild(titleText);

  const imageWrapper = utils.generateElement("div", "nl-img-wrapper");
  const img = generateElement("img", "news-img", newsLetterImage);
  imageWrapper.appendChild(img);

  const newsletterSubtitle = utils.generateElement("div", "signup-title");
  const newLetterSubText = utils.generateElement(
    "p",
    "nl-subtitle",
    "Sign up with your email address to recieve news and updates"
  );
}
