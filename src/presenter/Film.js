import FilmCard from "../components/film/film";
import Popup from "../components/popup/pop-up";

import {RenderPosition, Mode} from '../constants/constants';
import {render, remove, replace, removeElement} from "../utils/render.js";

export default class Film {
  constructor(filmListContainer, film, siteBody, changeData, changeMode) {
    this._filmListContainer = filmListContainer;
    this._film = film;
    this._siteBody = siteBody;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._filmComponent = null;
    this._popupComponent = null;
    this._mode = Mode.POPUP_CLOSED;

    this._handleWatchListClick = this._handleWatchListClick.bind(this);
    this._handleFavoritesClick = this._handleFavoritesClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handlePosterClick = this._handlePosterClick.bind(this);
    this._handleTitleClick = this._handleTitleClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);

  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;
    const prevPopupComponent = this._popupComponent;

    this._filmComponent = new FilmCard(this._film);
    this._popupComponent = new Popup(this._film);

    this._filmComponent.setWatchListClick(this._handleWatchListClick);
    this._filmComponent.setFavoritesClick(this._handleFavoritesClick);
    this._filmComponent.setWatchedClick(this._handleWatchedClick);
    this._filmComponent.setPosterClick(this._handlePosterClick);
    this._filmComponent.setTitleClick(this._handleTitleClick);
    this._popupComponent.setCloseButtonClickHandler(this._handleCloseClick);
    this._popupComponent.setWatchedClickHandler(this._handleWatchedClick);

    if (prevFilmComponent === null || prevPopupComponent === null) {
      render(this._filmListContainer, this._filmComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._filmListContainer.getElement().contains(prevFilmComponent.getElement())) {
      replace(this._filmComponent, prevFilmComponent);
    }

    if (this._mode === Mode.POPUP_OPEN) {
      replace(this._popupComponent, prevPopupComponent);
      this._popupComponent.setCloseButtonClickHandler(this._handleCloseClick);
    }

    remove(prevFilmComponent);
    remove(prevPopupComponent);


    // this._filmComponent = new FilmClass(this._film);
    // renderElement(this._filmListContainer, this._filmComponent.getElement(), RenderPosition.BEFOREEND);
    // this._filmComponent.setClickHandler(() => {
    //   this._openPopUp(this._film);
    // });
    // this._filmComponent.setWatchListClick(() => {
    //   this._handleWatchListClick();
    // });
  }
  // resetView() {
  //   if (this._mode !== Mode.POPUP_CLOSED) {
  //     this._closePopup();
  //     this._siteBody.classList.add(`hide-overflow`);
  //   }
  // }

  // _closePopup() {
  //   removeElement(this._siteBody, this._popupComponent);
  //   this._siteBody.classList.remove(`hide-overflow`);
  //   document.removeEventListener(`keydown`, this._onPopupEscPress);
  //   this._mode = Mode.POPUP_CLOSED;
  // }

  _openPopup() {
    render(this._siteBody, this._popupComponent, RenderPosition.BEFOREEND);
    this._changeMode();
    this._siteBody.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, this._onPopupEscPress);
    this._popupComponent.setCloseButtonClickHandler(this._handleCloseClick);
    this._mode = Mode.POPUP_OPEN;
  }

  _closePopup() {
    removeElement(this._siteBody, this._popupComponent);
    this._siteBody.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, this._onPopupEscPress);
    this._mode = Mode.POPUP_CLOSED;
  }

  _onPopupEscPress(evt) {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      this._closePopup();
    }
  }

  resetView() {
    if (this._mode !== Mode.POPUP_CLOSED) {
      this._closePopup();
      this._siteBody.classList.add(`hide-overflow`);
    }
  }


  _handleCloseClick() {
    this._closePopup();
  }

  _handlePosterClick() {
    this._openPopup();
  }

  _handleTitleClick() {
    this._openPopup();
  }

  _handleWatchListClick() {
    this._changeData(
        Object.assign(
            {},
            this._film,
            {
              watchlist: !this._film.watchlist
            }
        )
    );
  }
  _handleWatchedClick() {
    this._changeData(
        Object.assign(
            {},
            this._film,
            {
              watched: !this._film.watched
            }
        )
    );
  }

  _handleFavoritesClick() {
    this._changeData(
        Object.assign(
            {},
            this._film,
            {
              favorites: !this._film.favorites
            }
        )
    );
  }
}

