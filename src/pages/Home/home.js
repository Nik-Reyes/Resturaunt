import { createSpecials } from "../../components/Specials/special.js";
import strawRubarb from "../../assets/images/strawRubarb.jpg";
import scac from "../../assets/images/saltedCaramelAppleCrumble.jpg";
import keyLime from "../../assets/images/keyLime.jpg";

export default function () {
  //each special will have a unique image and name, and number to create
  const images = {
    strawRubarb,
    scac,
    keyLime,
    mapNames: {
      strawRubarb: "Stawberry Rubarb",
      scac: "Salted Caramel Apple Crumble",
      keyLime: "Key Lime",
    },
  };
  const monthlySpecials = createSpecials(images);
  const content = document.querySelector(".content");
  content.append(monthlySpecials);
}
