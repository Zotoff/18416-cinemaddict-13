import AbstractClass from '../Abstract';
import {createFilmControlsView} from '../../view/Film/filmControlsView.js';


export default class FilmControlsClass extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createFilmControlsView();
  }
}
