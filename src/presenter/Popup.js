import PopUpClass from "../components/popup/pop-up";
import {RenderPosition} from '../constants/constants';
import {renderElement} from "../utils/render.js";
import {checkKeyDownEvent} from '../utils/utils.js';

export default class PopUpPresenter {
  constructor(container, film) {
    this._popUpContainer = container;
    this._film = film;
  }

  init() {
    const popUpComponent = new PopUpClass(this._film);
    renderElement(this._popUpContainer, popUpComponent.getElement(), RenderPosition.BEFOREEND);
    document.addEventListener(`keydown`, (evt) => {
      this._pressEscapeOnPopup(evt, this._closeHandler(popUpComponent));
    });
    popUpComponent.setClickHandler(() => {
      this._closeHandler(popUpComponent);
    });
  }

  _closeHandler(component) {
    const popUpCloseButton = component.getElement().querySelector(`.film-details__close-btn`);
    component.getElement().remove();
    popUpCloseButton.removeEventListener(`click`, popUpCloseButton);
    document.removeEventListener(`keydown`, this._pressEscapeOnPopup);
  }
  _pressEscapeOnPopup(evt, handler) {
    checkKeyDownEvent(evt, `Escape`, handler);
  }
}
