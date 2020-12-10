import {createElement} from '../utils/utils';
import {createFooterMoviesCount} from '../view/footerMoviesCountView';


export default class FooterMoviesCount {
  constructor(films) {
    this._element = null;
    this._films = films;
  }

  getTemplate() {
    return createFooterMoviesCount(this._films);
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
