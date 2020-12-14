import {removeFilmCards} from "./utils";
import {RenderPosition} from "../constants/constants";

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
