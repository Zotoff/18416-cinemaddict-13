import AbstractClass from '../Abstract';
import {createPopUpPosterView} from '../../view/Popup/popUpPosterView';

export default class PopUpPosterClass extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createPopUpPosterView();
  }
}
