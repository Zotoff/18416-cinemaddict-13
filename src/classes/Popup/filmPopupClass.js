import AbstractClass from '../Abstract';
import {createFilmPopupView} from '../../view/Popup/filmPopupView';

export default class FilmPopupClass extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createFilmPopupView();
  }
}
