import AbstractClass from '../Abstract';
import {createFilmYearView} from '../../view/Film/filmYearView.js';


export default class FilmTitleClass extends AbstractClass {
  constructor(year) {
    super();
    this._year = year;
  }
  getTemplate() {
    return createFilmYearView(this._year);
  }
}
