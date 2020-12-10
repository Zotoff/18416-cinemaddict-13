import {createElement} from '../utils/utils';
import {createUserRank} from '../view/userRankView';

export default class UserRank {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createUserRank();
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
