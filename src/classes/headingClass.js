import {createElement} from '../utils/utils';
import {createHeading} from '../view/headingView';

export default class Heading {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createHeading();
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
