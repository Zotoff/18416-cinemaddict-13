import {Film, RenderPosition} from '../constants/constants';
import {renderElement} from "../utils/render.js";
import ShowMoreButtonClass from "../components/show-more/ShowMoreButtonClass";
import FilmPresenter from "./Film";

export default class ShowMoreButtonPresenter {
  constructor(container, films) {
    this._films = films;
    this._showMoreButtonContainer = container;
  }

  init() {
    const showMoreButtonComponent = new ShowMoreButtonClass();
    renderElement(this._showMoreButtonContainer, showMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

    showMoreButtonComponent.setClickHandler(() => {
      this._showMoreFilms(this._films);
    });
  }
  _showMoreFilms(filmsToShow) {
    const filmsListSelector = document.querySelector(`.films-list__container`);
    const firstButton = document.querySelector(`.films-list__show-more`);
    firstButton.remove();
    const showMoreButtonComponent = new ShowMoreButtonClass();
    if (filmsToShow.length > Film.FILMS_COUNT_PER_STEP) {
      renderElement(filmsListSelector, showMoreButtonComponent.getElement(), RenderPosition.AFTEREND);
      showMoreButtonComponent.setClickHandler(() => {
        filmsToShow
          .slice(Film.RENDER_FILMS_COUNT, Film.RENDER_FILMS_COUNT + Film.FILMS_COUNT_PER_STEP)
          .forEach((film) => {
            const FilmCard = new FilmPresenter(filmsListSelector, film);
            FilmCard.init();
          });
        Film.RENDER_FILMS_COUNT += Film.FILMS_COUNT_PER_STEP;
        if (Film.RENDER_FILMS_COUNT >= this._films.length) {
          showMoreButtonComponent.setClickHandler(() => {
            showMoreButtonComponent.getElement().remove();
          });
        }
      });
    }
  }
}
