import {renderElement} from "../utils/render.js";
import {RenderPosition} from '../constants/constants';

import ExtraFilmListClass from '../components/extra-films-list/extra-films-list';
import FilmPresenter from '../presenter/Film';

export default class TopRatedFilmsPresenter {
  constructor(filmListContainer, filmsContainer, films, heading) {
    this._filmListContainer = filmListContainer;
    this._filmsContainer = filmsContainer;
    this._heading = heading;
    this._extraFilmListComponent = new ExtraFilmListClass(this._heading);
    this._films = films;
  }

  init() {
    renderElement(this._filmListContainer, this._extraFilmListComponent.getElement(), RenderPosition.BEFOREEND);
    const extraFilmsSelector = document.querySelector(`.films-list--extra ${this._filmsContainer}`);
    const filteredFilms = this._films.filter((item) => item.rating >= 5);
    for (let i = 0; i < 2; i++) {
      this._renderFilm(filteredFilms[i], extraFilmsSelector);
    }
  }

  _renderFilm(film, container) {
    const FilmCard = new FilmPresenter(container, film);
    FilmCard.init();
  }
}
