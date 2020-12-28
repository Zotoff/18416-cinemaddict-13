import AbstractClass from '../../classes/Abstract';
import {filmView} from './filmTpl.js';

export default class FilmClass extends AbstractClass {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  getTemplate() {
    return filmView(this._film);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    const filmTitle = this.getElement().querySelector(`.film-card__title`);
    const filmPoster = this.getElement().querySelector(`.film-card__poster`);
    filmTitle.addEventListener(`click`, this._clickHandler);
    filmPoster.addEventListener(`click`, this._clickHandler);
  }
}
