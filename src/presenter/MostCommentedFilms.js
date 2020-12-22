import {renderElement} from "../utils/render.js";
import {RenderPosition} from '../constants/constants';

import ExtraFilmListClass from '../components/extra-films-list/extra-films-list';
import FilmPresenter from '../presenter/Film';

export default class MostCommentedFilmsPresenter {
  constructor(filmListContainer, filmsContainer, films, heading) {
    this._filmListContainer = filmListContainer;
    this._filmsContainer = filmsContainer;
    this._heading = heading;
    this._extraFilmListComponent = new ExtraFilmListClass(this._heading);
    this._films = films;
  }

  init() {
    renderElement(this._filmListContainer, this._extraFilmListComponent.getElement(), RenderPosition.BEFOREEND);
    const extraFilmsAll = document.querySelectorAll(`.films-list--extra`);
    const mostCommentedContainer = extraFilmsAll[1].querySelector(`${this._filmsContainer}`);
    const filteredFilms = this._films.filter((item) => item.comments.length >= 2);
    filteredFilms.forEach((item) => {
      this._renderFilm(item, mostCommentedContainer);
    });
  }

  _renderFilm(film, container) {
    const FilmCard = new FilmPresenter(container, film);
    FilmCard.init();
  }
}
