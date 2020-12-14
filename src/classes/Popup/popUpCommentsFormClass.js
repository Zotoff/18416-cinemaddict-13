import AbstractClass from '../Abstract';
import {createPopUpCommentsForm} from '../../view/Popup/popUpCommentsFormView';

export default class PopUpCommentsFormClass extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createPopUpCommentsForm();
  }
}
