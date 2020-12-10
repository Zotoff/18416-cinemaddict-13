import {createElement} from '../utils/utils';
import {createTopNav} from '../view/topNavView';

export default class TopNav {
  constructor(films) {
    this._element = null;
    this._films = films;
  }

  getTemplate() {
    return createTopNav(this._films);
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
