import AbstractClass from '../Abstract';
import {createFilmWatchedView} from '../../view/Film/filmWatchedView.js';

export default class FilmWatchedClass extends AbstractClass {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }
  getTemplate() {
    return createFilmWatchedView();
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
