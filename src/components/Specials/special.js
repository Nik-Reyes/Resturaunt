import { utils } from "../../utils/Helpers/helpers";
import "./special.css";

export function createSpecials(images) {
  const specialsWrapper = utils.generateElement("div", "specials-wrapper");
  const specials = utils.generateElement("div", "specials");
  const specialTitle = utils.generateElement("div", "title-wrapper");
  const title = utils.generateElement("p", "monthly-title", "Spring Flavors");
  const specialsList = [];

  for (const [key, value] of Object.entries(images)) {
    if (key !== "mapNames") {
      const special = utils.generateElement("div", "special");
      const image = utils.generateElement("img", "pie-img", value);
      const imageDescription = utils.generateElement("div", "img-description");
      const textWrapper = utils.generateElement("div", "text-wrapper");
      const descriptionText = utils.generateElement(
        "p",
        "special-text",
        images.mapNames[key]
      );
      specialTitle.appendChild(title);
      textWrapper.appendChild(descriptionText);
      imageDescription.appendChild(textWrapper);
      special.append(image, imageDescription);
      specialsList.push(special);
    }
  }

  specials.append(...specialsList);
  specialsWrapper.append(specialTitle, specials);
  return specialsWrapper;
}
