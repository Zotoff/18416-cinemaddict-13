import {createFilmCard} from '../src/view/filmCard.js';
import {createFilmPopup} from '../src/view/filmPopup.js';
import {createMainMenu} from '../src/view/mainMenu.js';
import {createShowMoreButton} from '../src/view/showMoreButton.js';
import {createUserRank} from '../src/view/userRank.js';
import {createFilmsList} from '../src/view/createFilmsList.js';
import {createHeaderProfile} from '../src/view/headerProfile.js';
import {createExtraFilmsList} from '../src/view/filmsListExtra.js';
import {createHeading} from '../src/view/heading.js';
import {createFooterMoviesCount} from '../src/view/footerMoviesCount.js';
import {generateFilm} from '../src/mock/film.js';
import {checkKeyDownEvent} from './utils/utils.js';
import {createTopNav} from '../src/mock/topnav.js';

const FILMS_COUNT = 20;
const FILMS_COUNT_PER_STEP = 5;

let renderFilmsCount = 5;

const mainBlock = document.querySelector(`.main`);
const headerBlock = document.querySelector(`.header`);
const footerBlock = document.querySelector(`.footer`);

const insertToDOM = (container, markup, place) => {
  container.insertAdjacentHTML(place, markup);
};

const films = new Array(FILMS_COUNT).fill().map(generateFilm);

insertToDOM(mainBlock, createMainMenu(), `afterbegin`);
insertToDOM(headerBlock, createHeaderProfile(), `beforeend`);

const headerProfile = document.querySelector(`.header__profile`);
insertToDOM(headerProfile, createUserRank(), `afterbegin`);

insertToDOM(mainBlock, createFilmsList(), `beforeend`);


/* Insert first film list*/
const filmsListContainer = document.querySelector(`.films-list__container`);

for (let i = 0; i < renderFilmsCount; i++) {
  insertToDOM(filmsListContainer, createFilmCard(films[i]), `afterbegin`);
}

/* Create extra film list*/

insertToDOM(mainBlock, createExtraFilmsList(), `beforeend`);
insertToDOM(mainBlock, createExtraFilmsList(), `beforeend`);

const extraFilmsLists = mainBlock.querySelectorAll(`.films-list--extra`);

const topRatedList = extraFilmsLists[0];

insertToDOM(topRatedList, createHeading(), `afterbegin`);

const topRatedHeading = topRatedList.querySelector(`h2`);

topRatedHeading.classList.add(`films-list__title`);
topRatedHeading.innerText = `Top rated`;

/* Insert main navigation*/
const topNavContainer = document.querySelector(`.main-navigation`);
const topNavFilters = topNavContainer.querySelector(`.main-navigation__items`);
topNavFilters.remove();
insertToDOM(topNavContainer, createTopNav(films), `afterbegin`);

/* Create top rated */
const topRatedContainer = topRatedList.querySelector(`.films-list__container`);

const renderTopRatedFilms = (filmsArray) => {
  const filteredFilms = filmsArray.filter((item) => {
    if (item.rating > 5) {
      return item;
    } else {
      return undefined;
    }
  });
  filteredFilms.forEach((item) => {
    insertToDOM(topRatedContainer, createFilmCard(item), `afterbegin`);
  });
};

renderTopRatedFilms(films);

/* Most commented films */

const mostCommentedList = extraFilmsLists[1];
insertToDOM(mostCommentedList, createHeading(), `afterbegin`);
const mostCommentedHeading = mostCommentedList.querySelector(`h2`);
mostCommentedHeading.classList.add(`films-list__title`);
mostCommentedHeading.innerText = `Most commented`;

const mostCommentedContainer = mostCommentedList.querySelector(`.films-list__container`);

const renderMostCommentedFilms = (filmsArray) => {
  const filteredFilms = filmsArray.filter((item) => {
    if (item.comments.length >= 1) {
      return item;
    } else {
      return undefined;
    }
  });
  filteredFilms.forEach((item) => {
    insertToDOM(mostCommentedContainer, createFilmCard(item), `afterbegin`);
  });
};

renderMostCommentedFilms(films);

const footerStatisticsBlock = footerBlock.querySelector(`.footer__statistics`);

insertToDOM(footerStatisticsBlock, createFooterMoviesCount(films), `beforeend`);

for (let i = 0; i < 1; i++) {
  insertToDOM(footerBlock, createFilmPopup(films[0]), `afterend`);
}

/* Popup handle*/

const filmCloseButton = document.querySelector(`.film-details__close-btn`);

if (filmCloseButton) {
  filmCloseButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const filmPopup = document.querySelector(`.film-details`);
    filmPopup.remove();
  });

  const closePopUp = () => {
    const filmPopup = document.querySelector(`.film-details`);
    filmPopup.remove();
    filmCloseButton.removeEventListener(`click`, filmCloseButton);
    document.removeEventListener(`keydown`, pressEscapeOnPopup);
  };

  const pressEscapeOnPopup = (evt) => {
    checkKeyDownEvent(evt, `Escape`, closePopUp);
  };

  document.addEventListener(`keydown`, pressEscapeOnPopup);
}


/* Top filters handle*/

const removeFilmCards = () => {
  const filmCardsContainer = document.querySelector(`.films-list__container`);
  const filmCards = filmCardsContainer.querySelectorAll(`.film-card`);
  filmCards.forEach((card) => {
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
    insertToDOM(filmsListContainer, createFilmCard(film), `afterbegin`);
  }
};

const renderWithoutFilter = () => {
  removeFilmCards();
  for (let film of films) {
    insertToDOM(filmsListContainer, createFilmCard(film), `afterbegin`);
  }
};


const topFilters = document.querySelectorAll(`.main-navigation__items a`);
topFilters.forEach((filterItem) => {
  filterItem.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const topFilterAddress = filterItem.getAttribute(`href`);
    switch (topFilterAddress) {
      case `#watchlist`:
        renderWithFilter(`watchlist`);
        break;
      case `#history`:
        renderWithFilter(`history`);
        break;
      case `#favorites`:
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
  if (filmsToShow.length > FILMS_COUNT_PER_STEP) {
    insertToDOM(filmsListContainer, createShowMoreButton(), `afterend`);
    const showMoreButton = document.querySelector(`.films-list__show-more`);
    showMoreButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      filmsToShow
        .slice(renderFilmsCount, renderFilmsCount + FILMS_COUNT_PER_STEP)
        .forEach((film) => {
          insertToDOM(filmsListContainer, createFilmCard(film), `beforeend`);
        });
      renderFilmsCount += FILMS_COUNT_PER_STEP;
      if (renderFilmsCount >= films.length) {
        showMoreButton.remove();
      }
    });
  }
};
showMoreFilms(films);
