import AbstractClass from '../Abstract';
import {createPopUpCloseView} from '../../view/Popup/popUpCloseView';

export default class PopUpCloseClass extends AbstractClass {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }
  getTemplate() {
    return createPopUpCloseView();
  }
  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}
