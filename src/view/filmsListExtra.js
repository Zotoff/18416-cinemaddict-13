import {createElement} from '../utils/utils';

const createExtraFilmsList = () => {
  return `<section class="films-list films-list--extra">
    <div class="films-list__container">
    </div>
  </section>`;
};

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
