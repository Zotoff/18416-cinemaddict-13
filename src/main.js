import FilmCardView from '../src/view/filmCard.js';
import FilmPopupView from '../src/view/filmPopup.js';
import MainMenuView from '../src/view/mainMenu.js';
import ShowMoreButtonView from '../src/view/showMoreButton.js';
import UserRankView from '../src/view/userRank.js';
import FilmListView from '../src/view/createFilmsList.js';
import HeaderProfileView from '../src/view/headerProfile.js';
import ExtraFilmsListView from '../src/view/filmsListExtra.js';
import HeadingView from '../src/view/heading.js';
import FooterMoviesCountView from '../src/view/footerMoviesCount.js';
import {generateFilm} from '../src/mock/film.js';
import {checkKeyDownEvent} from './utils/utils.js';
import TopNavView from './view/topnav.js';
import {renderElement, RenderPosition} from './utils/utils.js';
import {constants} from './constants/constants';

const mainBlock = document.querySelector(`.main`);
const headerBlock = document.querySelector(`.header`);
const footerBlock = document.querySelector(`.footer`);

const films = new Array(constants.FILMS_COUNT).fill().map(generateFilm);

renderElement(mainBlock, new MainMenuView().getElement(), RenderPosition.AFTERBEGIN);
renderElement(headerBlock, new HeaderProfileView().getElement(), RenderPosition.BEFOREEND);

const headerProfile = document.querySelector(`.header__profile`);

renderElement(headerProfile, new UserRankView().getElement(), RenderPosition.AFTERBEGIN);

renderElement(mainBlock, new FilmListView().getElement(), RenderPosition.BEFOREEND);

const filmListContainer = document.querySelector(`.films-list__container`);

for (let i = 0; i < constants.RENDER_FILMS_COUNT; i++) {
  renderElement(filmListContainer, new FilmCardView(films[i]).getElement(), RenderPosition.AFTERBEGIN);
}

/* Create extra film list*/
renderElement(mainBlock, new ExtraFilmsListView().getElement(), RenderPosition.BEFOREEND);
renderElement(mainBlock, new ExtraFilmsListView().getElement(), RenderPosition.BEFOREEND);

const extraFilmsLists = mainBlock.querySelectorAll(`.films-list--extra`);

const topRatedList = extraFilmsLists[0];

renderElement(topRatedList, new HeadingView().getElement(), RenderPosition.AFTERBEGIN);

const topRatedHeading = topRatedList.querySelector(`h2`);

topRatedHeading.classList.add(`films-list__title`);
topRatedHeading.innerText = `Top rated`;

/* Insert main navigation*/
const topNavContainer = document.querySelector(`.main-navigation`);
const topNavFilters = topNavContainer.querySelector(`.main-navigation__items`);
topNavFilters.remove();

renderElement(topNavContainer, new TopNavView(films).getElement(), RenderPosition.AFTERBEGIN);

/* Create top rated */
const topRatedContainer = topRatedList.querySelector(`.films-list__container`);

const renderTopRatedFilms = (filmsArray) => {
  const filteredFilms = filmsArray.filter((item) => item.rating >= 5);
  filteredFilms.forEach((item) => {
    renderElement(topRatedContainer, new FilmCardView(item).getElement(), RenderPosition.AFTERBEGIN);
  });
};

renderTopRatedFilms(films);

/* Most commented films */

const mostCommentedList = extraFilmsLists[1];
renderElement(mostCommentedList, new HeadingView().getElement(), RenderPosition.AFTERBEGIN);
const mostCommentedHeading = mostCommentedList.querySelector(`h2`);
mostCommentedHeading.classList.add(`films-list__title`);
mostCommentedHeading.innerText = `Most commented`;

const mostCommentedContainer = mostCommentedList.querySelector(`.films-list__container`);

const renderMostCommentedFilms = (filmsArray) => {
  const filteredFilms = filmsArray.filter((item) => item.comments.length >= 5);
  filteredFilms.forEach((item) => {
    renderElement(mostCommentedContainer, new FilmCardView(item).getElement(), RenderPosition.AFTERBEGIN);
  });
};

renderMostCommentedFilms(films);

const footerStatisticsBlock = footerBlock.querySelector(`.footer__statistics`);

renderElement(footerStatisticsBlock, new FooterMoviesCountView(films).getElement(), RenderPosition.BEFOREEND);

/* Popup Open */
const showCardPopup = (id) => {
  renderElement(footerBlock, new FilmPopupView(films[id]).getElement(), RenderPosition.BEFOREEND);
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
  const filteredFilms = films.filter((item) => {
    if (item[filteredProp] === true) {
      return item;
    } else {
      return undefined;
    }
  });
  for (let film of filteredFilms) {
    renderElement(filmListContainer, new FilmCardView(film).getElement(), RenderPosition.AFTERBEGIN);
  }
};

const renderWithoutFilter = () => {
  removeFilmCards();
  for (let film of films) {
    renderElement(filmListContainer, new FilmCardView(film).getElement(), RenderPosition.AFTERBEGIN);
  }
};


const topFilters = document.querySelectorAll(`.main-navigation__items a`);
topFilters.forEach((filterItem) => {
  filterItem.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const topFilterAddress = filterItem.getAttribute(`href`);
    switch (topFilterAddress) {
      case constants.FilterTypes.watchlist:
        renderWithFilter(`watchlist`);
        break;
      case constants.FilterTypes.history:
        renderWithFilter(`history`);
        break;
      case constants.FilterTypes.favorites:
        renderWithFilter(`favorites`);
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
    renderElement(filmListContainer, new ShowMoreButtonView().getElement(), RenderPosition.AFTEREND);
    const showMoreButton = document.querySelector(`.films-list__show-more`);
    showMoreButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      filmsToShow
        .slice(constants.RENDER_FILMS_COUNT, constants.RENDER_FILMS_COUNT + constants.FILMS_COUNT_PER_STEP)
        .forEach((film) => {
          renderElement(filmListContainer, new FilmCardView(film).getElement(), RenderPosition.BEFOREEND);
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
