import AbstractClass from '../../classes/Abstract';
import {showMoreButtonView} from './ShowMoreButtonView';


export default class ShowMoreButton extends AbstractClass {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }
  getTemplate() {
    return showMoreButtonView();
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
