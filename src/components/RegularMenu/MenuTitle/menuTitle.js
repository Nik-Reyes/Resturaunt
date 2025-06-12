import { utils } from "../../../utils/Helpers/helpers";

export function createMenuTitle() {
  const menuTitle = utils.generateElement("div", "menu-title");
  const titleText = utils.generateElement("h2", "title-text", "All Pies");
  const subtitle = utils.generateElement(
    "p",
    "subtitle",
    "Pie by the slice: $5"
  );
  menuTitle.append(titleText, subtitle);
  return menuTitle;
}
