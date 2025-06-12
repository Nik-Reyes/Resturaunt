import { utils } from "../../utils/Helpers/helpers";
import { createMenuItem } from "../MenuItem/item";
import "./menu.css";

export function menu() {
  const menuWrapper = utils.generateElement("div", "menu-wrapper");
  const menuItemWrapper = utils.generateElement("div", "menu-items-wrapper");
  const menuTitle = utils.generateElement("div", "menu-title");
  const titleText = utils.generateElement("h2", "title-text", "All Pies");
  const subtitle = utils.generateElement(
    "p",
    "subtitle",
    "Pie by the slice: $5"
  );
  const menuList = [];
  const menuItems = {
    lemonMeringue: createMenuItem(
      "Lemon Meringue",
      "17",
      "Graham cracker crust and fragrant lemon pie filled with lemon curd and topped with toasted marshmallow"
    ),
    coconutCreamPie: createMenuItem(
      "Coconut Cream Pie",
      "17",
      "A tropical take on the traditional cream pie, filled with rich vanilla custard, topped with smooth coconut frosting, and finished with a curl of toasted coconut"
    ),
    peanutButterPie: createMenuItem(
      "Peanut Butter Pie",
      "17",
      "Silky smooth peanut butter mousse in a chocolate cookie crust, topped with whipped cream and crushed peanuts"
    ),
    applePie: createMenuItem(
      "Classic Apple Pie",
      "16",
      "Traditional spiced apple filling with cinnamon and nutmeg in a flaky double crust, served with vanilla ice cream"
    ),
    pecanPie: createMenuItem(
      "Pecan Pie",
      "17",
      "Classic Southern pecan pie with a flaky butter crust filled with toasted pecans in a rich bourbon caramel"
    ),
    pumpkinPie: createMenuItem(
      "Pumpkin Pie",
      "16",
      "Smooth spiced pumpkin custard with cinnamon, nutmeg, and ginger in a traditional pastry crust"
    ),
    cherryPie: createMenuItem(
      "Cherry Pie",
      "17",
      "Tart-sweet cherry filling made with fresh cherries in a golden lattice-topped double crust"
    ),
    chocolateCreamPie: createMenuItem(
      "Chocolate Cream Pie",
      "17",
      "Rich chocolate pastry cream in a flaky crust, topped with billowy whipped cream and chocolate shavings"
    ),
    bananaCreamPie: createMenuItem(
      "Banana Cream Pie",
      "17",
      "Fresh banana slices layered with vanilla pastry cream in a buttery pie crust, topped with fluffy whipped cream"
    ),
    blueberryPie: createMenuItem(
      "Blueberry Pie",
      "16",
      "Fresh blueberries in a lightly sweetened filling with a hint of lemon, baked in a golden double crust"
    ),
    sweetPotatoPie: createMenuItem(
      "Sweet Potato Pie",
      "16",
      "Smooth sweet potato custard spiced with cinnamon and nutmeg in a tender pie crust"
    ),
    buttermilkPie: createMenuItem(
      "Buttermilk Pie",
      "16",
      "Traditional Southern custard pie with tangy buttermilk, vanilla, and a touch of nutmeg in a flaky crust"
    ),
  };

  for (let value of Object.values(menuItems)) {
    menuList.push(value);
  }

  menuTitle.append(titleText, subtitle);
  menuItemWrapper.append(...menuList);
  menuWrapper.append(menuTitle, menuItemWrapper);
  return menuWrapper;
}
