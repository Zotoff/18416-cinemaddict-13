import AbstractClass from '../../classes/Abstract';
import {popUpView} from './popUpTpl.js';

export default class PopUpClass extends AbstractClass {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  getTemplate() {
    return popUpView(this._film);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    const popUpCloseBtn = this.getElement().querySelector(`.film-details__close-btn`);
    popUpCloseBtn.addEventListener(`click`, this._clickHandler);
  }
}

