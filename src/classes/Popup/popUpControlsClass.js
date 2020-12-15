import AbstractClass from '../Abstract';
import {createPopUpControlsContainer} from '../../view/Popup/popUpControlsView';

export default class PopUpDetailsContainerClass extends AbstractClass {
  constructor() {
    super();
  }
  getTemplate() {
    return createPopUpControlsContainer();
  }
}
