import AbstractClass from '../Abstract';
import {createFilmGenreView} from '../../view/Film/filmGenreView.js';


export default class FilmGenreClass extends AbstractClass {
  constructor(genre) {
    super();
    this._genre = genre;
  }
  getTemplate() {
    return createFilmGenreView(this._genre);
  }
}
