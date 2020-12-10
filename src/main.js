import TopNavClass from '../src/classes/topNavClass.js';
import MainMenuClass from '../src/classes/mainMenuClass.js';
import FilmCardClass from '../src/classes/filmCardClass.js';
import FilmListClass from '../src/classes/filmListClass.js';
import FilmPopupClass from '../src/classes/filmPopupClass.js';
import ExtraFilmsListClass from '../src/classes/filmListExtraClass.js';
import ShowMoreButtonClass from '../src/classes/showMoreButtonClass.js';
import FooterMoviesCountClass from '../src/classes/footerMoviesCountClass.js';
import HeaderProfileClass from '../src/classes/headerProfileClass.js';
import HeadingClass from '../src/classes/headingClass.js';
import UserRankClass from '../src/classes/userRankClass.js';

import {generateFilm} from '../src/mock/film.js';

import {renderElement, RenderPosition, checkKeyDownEvent} from './utils/utils.js';
import {constants} from './constants/constants';

const mainBlock = document.querySelector(`.main`);
const headerBlock = document.querySelector(`.header`);
const footerBlock = document.querySelector(`.footer`);

const films = new Array(constants.FILMS_COUNT).fill().map(generateFilm);

renderElement(mainBlock, new MainMenuClass().getElement(), RenderPosition.AFTERBEGIN);
renderElement(headerBlock, new HeaderProfileClass().getElement(), RenderPosition.BEFOREEND);

const headerProfile = document.querySelector(`.header__profile`);

renderElement(headerProfile, new UserRankClass().getElement(), RenderPosition.AFTERBEGIN);

renderElement(mainBlock, new FilmListClass().getElement(), RenderPosition.BEFOREEND);

const filmListContainer = document.querySelector(`.films-list__container`);

for (let i = 0; i < constants.RENDER_FILMS_COUNT; i++) {
  renderElement(filmListContainer, new FilmCardClass(films[i]).getElement(), RenderPosition.BEFOREEND);
}

/* Create extra film list*/
renderElement(mainBlock, new ExtraFilmsListClass().getElement(), RenderPosition.BEFOREEND);
renderElement(mainBlock, new ExtraFilmsListClass().getElement(), RenderPosition.BEFOREEND);

const extraFilmsLists = mainBlock.querySelectorAll(`.films-list--extra`);

const topRatedList = extraFilmsLists[0];

renderElement(topRatedList, new HeadingClass().getElement(), RenderPosition.AFTERBEGIN);

const topRatedHeading = topRatedList.querySelector(`h2`);

topRatedHeading.classList.add(`films-list__title`);
topRatedHeading.innerText = `Top rated`;

/* Insert main navigation*/
const topNavContainer = document.querySelector(`.main-navigation`);
const topNavFilters = topNavContainer.querySelector(`.main-navigation__items`);
topNavFilters.remove();

renderElement(topNavContainer, new TopNavClass(films).getElement(), RenderPosition.AFTERBEGIN);

/* Create top rated */
const topRatedContainer = topRatedList.querySelector(`.films-list__container`);

const renderTopRatedFilms = (filmsArray) => {
  const filteredFilms = filmsArray.filter((item) => item.rating >= 5);
  filteredFilms.forEach((item) => {
    renderElement(topRatedContainer, new FilmCardClass(item).getElement(), RenderPosition.BEFOREEND);
  });
};

renderTopRatedFilms(films);

/* Most commented films */

const mostCommentedList = extraFilmsLists[1];
renderElement(mostCommentedList, new HeadingClass().getElement(), RenderPosition.AFTERBEGIN);
const mostCommentedHeading = mostCommentedList.querySelector(`h2`);
mostCommentedHeading.classList.add(`films-list__title`);
mostCommentedHeading.innerText = `Most commented`;

const mostCommentedContainer = mostCommentedList.querySelector(`.films-list__container`);

const renderMostCommentedFilms = (filmsArray) => {
  const filteredFilms = filmsArray.filter((item) => item.comments.length >= 2);
  filteredFilms.forEach((item) => {
    renderElement(mostCommentedContainer, new FilmCardClass(item).getElement(), RenderPosition.BEFOREEND);
  });
};

renderMostCommentedFilms(films);

const footerStatisticsBlock = footerBlock.querySelector(`.footer__statistics`);

renderElement(footerStatisticsBlock, new FooterMoviesCountClass(films).getElement(), RenderPosition.BEFOREEND);

/* Popup Open */
const showCardPopup = (id) => {
  renderElement(footerBlock, new FilmPopupClass(films[id]).getElement(), RenderPosition.BEFOREEND);
  const popUp = document.querySelector(`.film-details`);
  if (popUp) {
    const popUpCloseButton = popUp.querySelector(`.film-details__close-btn`);

    if (popUpCloseButton) {
      popUpCloseButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        popUp.remove();
      });
      const closePopUp = () => {
        popUp.remove();
        popUpCloseButton.removeEventListener(`click`, popUpCloseButton);
        document.removeEventListener(`keydown`, pressEscapeOnPopup);
      };
      const pressEscapeOnPopup = (evt) => {
        checkKeyDownEvent(evt, `Escape`, closePopUp);
      };
      document.addEventListener(`keydown`, pressEscapeOnPopup);
    }
  }
};

const renderPopUp = () => {
  const filmCards = document.querySelectorAll(`.film-card`);
  filmCards.forEach((card) => {
    const cardTitle = card.querySelector(`.film-card__title`);
    const cardId = card.getAttribute(`data-id`);
    const cardPoster = card.querySelector(`.film-card__poster`);
    const cardComments = card.querySelector(`.film-card__comments`);

    cardTitle.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      showCardPopup(cardId);
    });

    cardPoster.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      showCardPopup(cardId);
    });

    cardComments.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      showCardPopup(cardId);
    });

  });
};

renderPopUp();

/* Top filters handle*/

const removeFilmCards = () => {
  const filmCardsContainer = document.querySelector(`.films-list__container`);
  const filmCardsList = filmCardsContainer.querySelectorAll(`.film-card`);
  filmCardsList.forEach((card) => {
    card.remove();
  });
};

const renderWithFilter = (filteredProp) => {
  removeFilmCards();
  const filteredFilms = films.filter((item) => item[filteredProp]);
  for (let film of filteredFilms) {
    renderElement(filmListContainer, new FilmCardClass(film).getElement(), RenderPosition.BEFOREEND);
  }
};

const renderWithoutFilter = () => {
  removeFilmCards();
  for (let film of films) {
    renderElement(filmListContainer, new FilmCardClass(film).getElement(), RenderPosition.BEFOREEND);
  }
};


const topFilters = document.querySelectorAll(`.main-navigation__items a`);
topFilters.forEach((filterItem) => {
  filterItem.classList.remove(`main-navigation__item--active`);
  filterItem.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    topFilters.forEach((item) => {
      item.classList.remove(`main-navigation__item--active`);
    });
    if (filterItem.classList.contains(`main-navigation__item--active`)) {
      filterItem.classList.remove(`main-navigation__item--active`);
    } else {
      filterItem.classList.add(`main-navigation__item--active`);
    }
    const topFilterAddress = filterItem.getAttribute(`href`);
    switch (topFilterAddress) {
      case constants.FilterTypes.watchlist:
        renderWithFilter(constants.FilterNames.watchlist);
        break;
      case constants.FilterTypes.history:
        renderWithFilter(constants.FilterNames.history);
        break;
      case constants.FilterTypes.favorites:
        renderWithFilter(constants.FilterNames.favorites);
        break;
      default:
        renderWithoutFilter();
    }
  });
});


/* Show more films render */
const showMoreFilms = (filmsToShow) => {
  const moreButton = document.querySelector(`.films-list__show-more`);
  if (moreButton) {
    moreButton.remove();
  }
  if (filmsToShow.length > constants.FILMS_COUNT_PER_STEP) {
    renderElement(filmListContainer, new ShowMoreButtonClass().getElement(), RenderPosition.AFTEREND);
    const showMoreButton = document.querySelector(`.films-list__show-more`);
    showMoreButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      filmsToShow
        .slice(constants.RENDER_FILMS_COUNT, constants.RENDER_FILMS_COUNT + constants.FILMS_COUNT_PER_STEP)
        .forEach((film) => {
          renderElement(filmListContainer, new FilmCardClass(film).getElement(), RenderPosition.BEFOREEND);
        });
      constants.RENDER_FILMS_COUNT += constants.FILMS_COUNT_PER_STEP;
      renderPopUp();
      if (constants.RENDER_FILMS_COUNT >= films.length) {
        showMoreButton.remove();
      }
    });
  }
};
showMoreFilms(films);
