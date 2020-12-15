import AbstractClass from '../Abstract';
import {createFilmInfoView} from '../../view/Film/filmInfoView.js';


export default class FilmInfoClass extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createFilmInfoView();
  }
}
