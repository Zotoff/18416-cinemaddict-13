import AbstractClass from '../Abstract';
import {createPopUpCommentsContainer} from '../../view/Popup/popUpCommentsWrapView';

export default class PopUpCommentsWrapClass extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createPopUpCommentsContainer();
  }
}
