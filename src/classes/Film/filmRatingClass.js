import AbstractClass from '../Abstract';
import {createFilmRatingView} from '../../view/Film/filmRatingView.js';


export default class FilmRatingClass extends AbstractClass {
  constructor(rating) {
    super();
    this._rating = rating;
  }
  getTemplate() {
    return createFilmRatingView(this._rating);
  }

  _clickHandler(evt) {
    evt.preventDefault();
  }
}
