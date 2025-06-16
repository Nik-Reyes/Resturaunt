import { utils } from "../../utils/Helpers/helpers";
import strawRhubarb from "../../assets/images/strawRhubarb.jpg";
import scac from "../../assets/images/saltedCaramelAppleCrumble.jpg";
import keyLime from "../../assets/images/keyLime.jpg";
import "./special.css";

export function createSpecials() {
  const specialsWrapper = utils.generateElement("div", "specials-wrapper");
  const specials = utils.generateElement("div", "specials");
  const specialTitle = utils.generateElement("div", "title-wrapper");
  const title = utils.generateElement("h2", "monthly-title", "Summer Flavors");
  const specialsList = [];

  const images = {
    strawRhubarb,
    scac,
    keyLime,
    mapNames: {
      strawRhubarb: "Stawberry Rhubarb",
      scac: "Salted Caramel Apple Crumble",
      keyLime: "Key Lime",
    },
  };

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
