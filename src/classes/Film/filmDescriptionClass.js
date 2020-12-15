import AbstractClass from '../Abstract';
import {createFilmDescriptionView} from '../../view/Film/filmDescriptionView.js';


export default class FilmTitleClass extends AbstractClass {
  constructor(description) {
    super();
    this._description = description;
  }
  getTemplate() {
    return createFilmDescriptionView(this._description);
  }
}
