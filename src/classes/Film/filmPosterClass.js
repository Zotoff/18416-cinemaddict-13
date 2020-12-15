import AbstractClass from '../Abstract';
import {createFilmPosterView} from '../../view/Film/filmPosterView.js';


export default class FilmPosterClass extends AbstractClass {
  constructor(title, poster) {
    super();
    this._title = title;
    this._poster = poster;
    this._clickHandler = this._clickHandler.bind(this);
  }
  getTemplate() {
    return createFilmPosterView(this._title, this._poster);
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
