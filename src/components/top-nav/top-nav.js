import AbstractClass from '../../classes/Abstract';
import {topNavView} from './topNavTpl';

export default class TopNavClass extends AbstractClass {
  constructor(films) {
    super();
    this._films = films;
    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  getTemplate() {
    return topNavView(this._films);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
  }
}

