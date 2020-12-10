import {createElement} from '../utils/utils.js';
import {createMainMenu} from '../view/mainMenuView.js';


export default class MainMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMainMenu();
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
