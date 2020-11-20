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


const mainBlock = document.querySelector(`.main`);
const headerBlock = document.querySelector(`.header`);
const footerBlock = document.querySelector(`.footer`);

const insertToDOM = (container, markup, place) => {
  container.insertAdjacentHTML(place, markup);
};

insertToDOM(mainBlock, createMainMenu(), `afterbegin`);
insertToDOM(headerBlock, createHeaderProfile(), `beforeend`);

const headerProfile = document.querySelector(`.header__profile`);
insertToDOM(headerProfile, createUserRank(), `afterbegin`);

insertToDOM(mainBlock, createFilmsList(), `beforeend`);

const filmsListContainer = document.querySelector(`.films-list__container`);

insertToDOM(filmsListContainer, createFilmCard(), `afterbegin`);
insertToDOM(filmsListContainer, createFilmCard(), `afterbegin`);
insertToDOM(filmsListContainer, createFilmCard(), `afterbegin`);
insertToDOM(filmsListContainer, createFilmCard(), `afterbegin`);
insertToDOM(filmsListContainer, createFilmCard(), `afterbegin`);

insertToDOM(filmsListContainer, createShowMoreButton(), `afterend`);

insertToDOM(mainBlock, createExtraFilmsList(), `beforeend`);
insertToDOM(mainBlock, createExtraFilmsList(), `beforeend`);

const extraFilmsLists = mainBlock.querySelectorAll(`.films-list--extra`);

const topRatedList = extraFilmsLists[0];

insertToDOM(topRatedList, createHeading(), `afterbegin`);

const topRatedHeading = topRatedList.querySelector(`h2`);

topRatedHeading.classList.add(`films-list__title`);
topRatedHeading.innerText = `Top rated`;

const topRatedContainer = topRatedList.querySelector(`.films-list__container`);

insertToDOM(topRatedContainer, createFilmCard(), `afterbegin`);
insertToDOM(topRatedContainer, createFilmCard(), `afterbegin`);

const mostCommentedList = extraFilmsLists[1];

insertToDOM(mostCommentedList, createHeading(), `afterbegin`);

const mostCommentedHeading = mostCommentedList.querySelector(`h2`);

mostCommentedHeading.classList.add(`films-list__title`);
mostCommentedHeading.innerText = `Most commented`;

const mostCommentedContainer = mostCommentedList.querySelector(`.films-list__container`);

insertToDOM(mostCommentedContainer, createFilmCard(), `afterbegin`);
insertToDOM(mostCommentedContainer, createFilmCard(), `afterbegin`);

const footerStatisticsBlock = footerBlock.querySelector(`.footer__statistics`);

insertToDOM(footerStatisticsBlock, createFooterMoviesCount(), `beforeend`);

insertToDOM(footerBlock, createFilmPopup(), `afterend`);
