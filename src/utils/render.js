import {removeFilmCards} from "./utils";
import {RenderPosition} from "../constants/constants";
import Abstract from "../components/abstract/abstract";

export const renderWithFilter = (container, films, filteredProp, cb) => {
  removeFilmCards();
  const filteredFilms = films.filter((item) => item[filteredProp]);
  for (let film of filteredFilms) {
    cb(container, film);
  }
};

export const renderWithoutFilter = (container, films, cb) => {
  removeFilmCards();
  for (let film of films) {
    cb(container, film);
  }
};

export const renderTemplate = (container, element, position) => {
  container.insertAdjacentHTML(position, element);
};

export const renderElement = (container, element, position) => {
  switch (position) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    default:
      container.insertAdjacentElement(`afterend`, element);
      break;
  }
};

export const render = (container, child, position) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement();
  }

  switch (position) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

export const remove = (component) => {
  if (!(component instanceof Abstract)) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

export const removeElement = (place, element) => {
  if (!(element instanceof Abstract)) {
    throw new Error(`Can remove only components`);
  }

  place.removeChild(element.getElement());
};

export const replace = (newChild, oldChild) => {
  if (oldChild instanceof Abstract) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof Abstract) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};
