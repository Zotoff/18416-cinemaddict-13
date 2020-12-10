import {createElement} from '../utils/utils';
import {createExtraFilmsList} from '../view/filmsListExtraView';

export default class ExtraFilmList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createExtraFilmsList();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
