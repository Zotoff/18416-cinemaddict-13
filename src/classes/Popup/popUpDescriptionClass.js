import AbstractClass from '../Abstract';
import {createPopUpDescription} from '../../view/Popup/popUpDescriptionView';

export default class PopUpDescriptionClass extends AbstractClass {
  constructor(description) {
    super();
    this._description = description;
  }
  getTemplate() {
    return createPopUpDescription(this._description);
  }
}

