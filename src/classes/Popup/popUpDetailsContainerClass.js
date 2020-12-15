import AbstractClass from '../Abstract';
import {createPopUpDetailsContainer} from '../../view/Popup/popUpDetailsContainerView';

export default class PopUpDetailsContainerClass extends AbstractClass {
  constructor(film) {
    super();
    this._film = film;
  }
  getTemplate() {
    return createPopUpDetailsContainer(this._film);
  }
}

