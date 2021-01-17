import AbstractClass from '../abstract/abstract';
import {filmView} from './film-tpl.js';

export default class FilmCard extends AbstractClass {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._posterClickHandler = this._posterClickHandler.bind(this);
    this._titleClickHandler = this._titleClickHandler.bind(this);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }
  _watchListClickHandler() {
    this._callback.watchListClick();
  }
  _favoriteClickHandler() {
    this._callback.favoritesClick();
  }
  _watchedClickHandler() {
    this._callback.watchedClick();
  }
  _posterClickHandler() {
    this._callback.posterClick();
  }
  _titleClickHandler() {
    this._callback.titleClick();
  }


  getTemplate() {
    return filmView(this._film);
  }

  // setClickHandler(callback) {
  //   this._callback.click = callback;
  //   const filmTitle = this.getElement().querySelector(`.film-card__title`);
  //   const filmPoster = this.getElement().querySelector(`.film-card__poster`);
  //   filmTitle.addEventListener(`click`, this._clickHandler);
  //   filmPoster.addEventListener(`click`, this._clickHandler);
  // }
  setWatchListClick(callback) {
    this._callback.watchListClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchListClickHandler);
  }
  setWatchedClick(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
  }
  setFavoritesClick(callback) {
    this._callback.favoritesClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }
  setPosterClick(callback) {
    this._callback.posterClick = callback;
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._posterClickHandler);
  }
  setTitleClick(callback) {
    this._callback.titleClick = callback;
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._titleClickHandler);
  }
  // setCloseClick(callback) {
  //   this._callback.CloseClick = callback;
  //   this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  // }
}
