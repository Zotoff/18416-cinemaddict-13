import {renderElement} from "../utils/render.js";
import {Film, RenderPosition} from '../constants/constants';

import FilmListClass from '../components/film-list/film-list';
import FilmPresenter from '../presenter/Film';
import ShowMoreButtonPresenter from "./ShowMoreButton";

export default class FilmListPresenter {
  constructor(filmListContainer, films) {
    this._filmListContainer = filmListContainer;
    this._filmListComponent = new FilmListClass();
    this._films = films;
  }

  init() {
    renderElement(this._filmListContainer, this._filmListComponent.getElement(), RenderPosition.BEFOREEND);
    const filmsListSelector = document.querySelector(`.films-list__container`);
    this._renderFilm(this._films, filmsListSelector);
    const showMoreButtonComponent = new ShowMoreButtonPresenter(filmsListSelector, this._films);
    showMoreButtonComponent.init();
  }

  _renderFilm(films, container) {
    for (let i = 0; i < Film.FILMS_COUNT_PER_STEP; i++) {
      const FilmCard = new FilmPresenter(container, films[i]);
      FilmCard.init();
    }
  }
}
