import AbstractClass from '../Abstract';
import {createFilmTitleView} from '../../view/Film/filmTitleView.js';


export default class FilmTitleClass extends AbstractClass {
  constructor(title) {
    super();
    this._title = title;
    this._clickHandler = this._clickHandler.bind(this);
  }
  getTemplate() {
    return createFilmTitleView(this._title);
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
