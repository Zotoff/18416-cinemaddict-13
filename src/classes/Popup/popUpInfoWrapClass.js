import AbstractClass from '../Abstract';
import {createPopUpInfoWrapVIew} from '../../view/Popup/popUpInfoWrapView';

export default class PopUpInfoWrapClass extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createPopUpInfoWrapVIew();
  }
}
