import AbstractClass from '../../classes/Abstract';
import {filterItemTpl} from './FilterItemTpl';

export class FilterItem extends AbstractClass {
  constructor(films, toggler, text) {
    super();
    this._films = films;
    this._toggler = toggler;
    this._text = text;
    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  getTemplate() {
    return filterItemTpl(this._films, this._toggler, this._text);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}
