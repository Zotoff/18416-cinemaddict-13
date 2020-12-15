import AbstractClass from '../Abstract';
import {createFilmPopupForm} from '../../view/Popup/popUpFormView';

export default class PopUpFormClass extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createFilmPopupForm();
  }
}
