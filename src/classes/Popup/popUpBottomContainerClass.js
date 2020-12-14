import AbstractClass from '../Abstract';
import {createPopUpBottomContainer} from '../../view/Popup/popUpBottomContainerView';

export default class PopUpBottomContainerClass extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createPopUpBottomContainer();
  }
}
