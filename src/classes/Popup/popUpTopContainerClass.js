import AbstractClass from '../Abstract';
import {createPopUpTopContainer} from '../../view/Popup/popUpTopContainerView';

export default class FilmPopup extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createPopUpTopContainer();
  }
}
