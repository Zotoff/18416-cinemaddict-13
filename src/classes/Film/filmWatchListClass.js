import AbstractClass from '../Abstract';
import {createFilmWatchListView} from '../../view/Film/filmWatchListView.js';

export default class FilmWatchListClass extends AbstractClass {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }
  getTemplate() {
    return createFilmWatchListView();
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
