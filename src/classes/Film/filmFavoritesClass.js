import AbstractClass from '../Abstract';
import {createFilmFavoritesView} from '../../view/Film/filmFavoritesView.js';


export default class FilmFavoritesClass extends AbstractClass {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }
  getTemplate() {
    return createFilmFavoritesView();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}
