export const utils = {
  generateElement: (type, cls, content) => {
    const element = document.createElement(type);
    utils.assignClass(element, cls);
    if (content && content.includes(".jpg")) {
      element.src = content;
    }
    if (content && !content.includes(".jpg")) {
      element.innerText = content;
    }
    return element;
  },
  assignInnerText: (element, text) => (element.innerText = text),
  assignClass: (element, cls) => (element.className = cls),
  assignClasses: (element, classes) => element.classList.add(...classes),
};
