import { createSpecials } from "../../components/Specials/special.js";
import { menu } from "../../components/Menu/menu.js";
import strawRhubarb from "../../assets/images/strawRhubarb.jpg";
import scac from "../../assets/images/saltedCaramelAppleCrumble.jpg";
import keyLime from "../../assets/images/keyLime.jpg";

export default function () {
  const content = document.querySelector(".content");

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
  const monthlySpecials = createSpecials(images);
  const regMenu = menu();

  content.append(monthlySpecials, regMenu);
}
