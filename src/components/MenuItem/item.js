import { utils } from "../../utils/Helpers/helpers";

export function createMenuItem(title, price, description) {
  const itemContainer = utils.generateElement("div", "menu-item");
  const titleWrapper = utils.generateElement("div", "title-wrapper");
  const itemTitle = utils.generateElement("span", "item-title", title);
  const itemPrice = utils.generateElement("span", "item-price", price);
  const itemDescription = utils.generateElement("div", "item-description");
  const itemText = utils.generateElement("p", "item-text", description);

  itemDescription.appendChild(itemText);
  titleWrapper.append(itemTitle, itemPrice);
  itemContainer.append(titleWrapper, itemDescription);
  return itemContainer;
}
