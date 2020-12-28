import FilmClass from "../components/film/film";
import PopUpPresenter from './Popup';
import {RenderPosition} from '../constants/constants';
import {renderElement} from "../utils/render.js";

export default class Film {
  constructor(filmListContainer, film) {
    this._filmListContainer = filmListContainer;
    this._film = film;
  }

  init() {
    this._filmComponent = new FilmClass(this._film);
    renderElement(this._filmListContainer, this._filmComponent.getElement(), RenderPosition.BEFOREEND);
    this._filmComponent.setClickHandler(() => {
      this._openPopUp(this._film);
    });
  }
  _openPopUp(film) {
    const popUpContainer = document.querySelector(`main`);
    const popUpPresenter = new PopUpPresenter(popUpContainer, film);
    popUpPresenter.init();
  }
}
