import TopNavClass from "../components/top-nav/top-nav";
import {RenderPosition} from '../constants/constants';
import {renderElement} from "../utils/render.js";
import {FilterItem} from "../components/filter-item/filter-item";
import FilmListPresenter from "./FilmList";

export default class TopNavPresenter {
  constructor(container, films) {
    this._topNavContainer = container;
    this._films = films;
  }

  init() {
    const topNavComponent = new TopNavClass(this._films);
    const FilterItemAll = new FilterItem(this._films, `all`, `All`);
    const FilterItemHistory = new FilterItem(this._films, `history`, `History`);
    const FilterItemWatchList = new FilterItem(this._films, `watchlist`, `Watchlist`);
    const FilterItemFavorites = new FilterItem(this._films, `favorites`, `Favorites`);
    renderElement(this._topNavContainer, topNavComponent.getElement(), RenderPosition.AFTERBEGIN);
    renderElement(topNavComponent.getElement(), FilterItemHistory.getElement(), RenderPosition.AFTERBEGIN);
    renderElement(topNavComponent.getElement(), FilterItemWatchList.getElement(), RenderPosition.AFTERBEGIN);
    renderElement(topNavComponent.getElement(), FilterItemFavorites.getElement(), RenderPosition.AFTERBEGIN);
    renderElement(topNavComponent.getElement(), FilterItemAll.getElement(), RenderPosition.AFTERBEGIN);

    FilterItemAll.setClickHandler(() => {
      this._renderFilms(`all`, this._films);
      this._switchActiveClass(FilterItemAll);
    });
    FilterItemHistory.setClickHandler(() => {
      this._renderFilms(`history`, this._films);
      this._switchActiveClass(FilterItemHistory);
    });
    FilterItemWatchList.setClickHandler(() => {
      this._renderFilms(`watchlist`, this._films);
      this._switchActiveClass(FilterItemWatchList);
    });
    FilterItemFavorites.setClickHandler(() => {
      this._renderFilms(`favorites`, this._films);
      this._switchActiveClass(FilterItemFavorites);
    });
  }
  _renderFilms(filter, films) {
    const clearFilms = () => {
      const filmsSelector = document.querySelector(`.films-list`);
      const Films = filmsSelector.querySelectorAll(`.film-card`);
      const showMoreButton = document.querySelector(`.films-list__show-more`);
      Films.forEach((item) => item.remove());
      if (showMoreButton) {
        showMoreButton.remove();
      }
    };
    const removeActiveClass = () => {
      const filterItems = document.querySelectorAll(`.main-navigation__item`);
      filterItems.forEach((item) => {
        item.classList.remove(`main-navigation__item--active`);
      });
    };
    switch (filter) {
      case `history`:
        removeActiveClass();
        clearFilms();
        const historyFilms = films.filter((item) => {
          return item.history;
        });
        const FilmListHistory = new FilmListPresenter(historyFilms);
        FilmListHistory.init();
        break;
      case `watchlist`:
        removeActiveClass();
        clearFilms();
        const watchListFilms = films.filter((item) => {
          return item.watchlist;
        });
        const FilmListWatchList = new FilmListPresenter(watchListFilms);
        FilmListWatchList.init();
        break;
      case `favorites`:
        removeActiveClass();
        clearFilms();
        const favoriteFilms = films.filter((item) => {
          return item.favorites;
        });
        const FilmListFavorites = new FilmListPresenter(favoriteFilms);
        FilmListFavorites.init();
        break;
      default:
        removeActiveClass();
        clearFilms();
        const FilmList = new FilmListPresenter(films);
        FilmList.init();
    }

  }
  _switchActiveClass(component) {
    if (component.getElement().classList.contains(`main-navigation__item--active`)) {
      component.getElement().classList.remove(`main-navigation__item--active`);
    } else {
      component.getElement().classList.add(`main-navigation__item--active`);
    }
  }
}
