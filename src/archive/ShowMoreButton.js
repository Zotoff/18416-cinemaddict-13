import {Film} from '../constants/constants';
import {renderElement} from "../utils/render.js";
import ShowMoreButton from "../components/show-more/show-more-button";
import FilmPresenter from "./Film";

export default class ShowMoreButtonPresenter {
  constructor(container, films) {
    this._films = films;
    this._showMoreButtonContainer = container;
  }

  init() {
    const showMoreButtonComponent = new ShowMoreButton();
    renderElement(this._showMoreButtonContainer, showMoreButtonComponent.getElement());
    showMoreButtonComponent.setClickHandler(() => {
      this._showMoreFilms(this._films, showMoreButtonComponent);
    });
  }
  _showMoreFilms(filmsToShow, buttonComponent) {
    const filmsListSelector = document.querySelector(`.films-list__container`);
    if (filmsToShow.length > Film.FILMS_COUNT_PER_STEP) {
      filmsToShow
          .slice(Film.RENDER_FILMS_COUNT, Film.RENDER_FILMS_COUNT + Film.FILMS_COUNT_PER_STEP)
          .forEach((film) => {
            const FilmCard = new FilmPresenter(filmsListSelector, film);
            FilmCard.init();
          });
      Film.RENDER_FILMS_COUNT += Film.FILMS_COUNT_PER_STEP;
      if (Film.RENDER_FILMS_COUNT >= this._films.length) {
        buttonComponent.getElement().remove();
      }
    }

  }
}
