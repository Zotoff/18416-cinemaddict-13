import TopNavClass from '../src/classes/topNavClass.js';
import FilterItemClass from '../src/classes/filterItemClass.js';
import MainMenuClass from '../src/classes/mainMenuClass.js';
import FilmListClass from '../src/classes/Film/filmListClass.js';
import FilmCardClass from './classes/Film/filmCardClass.js';
import FilmTitleClass from './classes/Film/filmTitleClass.js';
import FilmRatingClass from './classes/Film/filmRatingClass.js';
import FilmInfoClass from './classes/Film/filmInfoClass.js';
import FilmYearClass from './classes/Film/filmYearClass.js';
import FilmGenreClass from './classes/Film/filmGenreClass.js';
import FilmDurationClass from './classes/Film/filmDurationClass.js';
import FilmPosterClass from './classes/Film/filmPosterClass.js';
import FilmDescriptionClass from './classes/Film/filmDescriptionClass.js';
import FilmCommentsClass from './classes/Film/filmCommentsClass.js';
import FilmControlsClass from './classes/Film/filmControlsClass.js';
import FilmWatchedClass from './classes/Film/filmWatchedClass';
import FilmWatchListClass from '../src/classes/Film/filmWatchListClass';
import FilmFavoritesClass from './classes/Film/filmFavoritesClass';
import ExtraFilmsListClass from '../src/classes/Film/filmListExtraClass.js';

import FilmPopUpClass from './classes/Popup/filmPopupClass.js';
import PopUpBottomContainerClass from './classes/Popup/popUpBottomContainerClass';
import PopUpCloseClass from './classes/Popup/popUpCloseClass';
import PopUpCommentsFormClass from './classes/Popup/popUpCommentsFormClass';
import PopUpCommentsListClass from './classes/Popup/popUpCommentsListClass';
import PopUpCommentsTitleClass from './classes/Popup/popUpCommentsTitleClass';
import PopUpCommentsWrapClass from './classes/Popup/popUpCommentsWrapClass';
import PopUpControlsClass from './classes/Popup/popUpControlsClass';
import PopUpDescriptionClass from './classes/Popup/popUpDescriptionClass';
import PopUpDetailsContainerClass from './classes/Popup/popUpDetailsContainerClass';
import PopUpFormClass from './classes/Popup/popUpFormClass';
import PopUpInfoWrapClass from './classes/Popup/popUpInfoWrapClass';
import PopUpPosterClass from './classes/Popup/popUpPosterClass';
import PopUpPosterImgClass from './classes/Popup/popUpPosterImgClass';
import PopUpPosterRatingClass from './classes/Popup/popUpPosterRatingClass';
import PopUpTopContainerClass from './classes/Popup/popUpTopContainerClass';


import ShowMoreButtonClass from '../src/classes/showMoreButtonClass.js';
import FooterMoviesCountClass from '../src/classes/footerMoviesCountClass.js';
import HeaderProfileClass from '../src/classes/headerProfileClass.js';
import HeadingClass from '../src/classes/headingClass.js';
import UserRankClass from '../src/classes/userRankClass.js';

import {generateFilm} from '../src/mock/film.js';
import {renderElement, renderWithFilter, renderWithoutFilter} from './utils/render.js';
import {checkKeyDownEvent} from './utils/utils.js';
import {constants, RenderPosition} from './constants/constants';

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

/* Render the film card */

const renderFilmCard = (container, film) => {

  const {id, name, rating, year, duration, genres, poster, description, commentsCount} = film;
  const filmCard = new FilmCardClass(id);

  renderElement(container, filmCard.getElement(), RenderPosition.BEFOREEND);

  const filmTitle = new FilmTitleClass(name);
  renderElement(filmCard.getElement(), filmTitle.getElement(), RenderPosition.BEFOREEND);
  filmTitle.setClickHandler(() => {
    renderPopUp(film);
  });

  const filmRating = new FilmRatingClass(rating);
  renderElement(filmCard.getElement(), filmRating.getElement(), RenderPosition.BEFOREEND);

  const filmInfo = new FilmInfoClass();
  renderElement(filmCard.getElement(), filmInfo.getElement(), RenderPosition.BEFOREEND);

  const filmYear = new FilmYearClass(year);
  renderElement(filmInfo.getElement(), filmYear.getElement(), RenderPosition.BEFOREEND);
  const filmDuration = new FilmDurationClass(duration);
  renderElement(filmInfo.getElement(), filmDuration.getElement(), RenderPosition.BEFOREEND);
  const filmGenre = new FilmGenreClass(genres);
  renderElement(filmInfo.getElement(), filmGenre.getElement(), RenderPosition.BEFOREEND);

  const filmPoster = new FilmPosterClass(name, poster);
  renderElement(filmCard.getElement(), filmPoster.getElement(), RenderPosition.BEFOREEND);
  filmPoster.setClickHandler(() => {
    renderPopUp(film);
  });


  const filmDescription = new FilmDescriptionClass(description);
  renderElement(filmCard.getElement(), filmDescription.getElement(), RenderPosition.BEFOREEND);
  const filmComments = new FilmCommentsClass(commentsCount);
  renderElement(filmCard.getElement(), filmComments.getElement(), RenderPosition.BEFOREEND);

  const filmControls = new FilmControlsClass();
  renderElement(filmCard.getElement(), filmControls.getElement(), RenderPosition.BEFOREEND);

  const filmWatchList = new FilmWatchListClass();
  renderElement(filmControls.getElement(), filmWatchList.getElement(), RenderPosition.BEFOREEND);
  const filmWatched = new FilmWatchedClass();
  renderElement(filmControls.getElement(), filmWatched.getElement(), RenderPosition.BEFOREEND);
  const filmFavorite = new FilmFavoritesClass();
  renderElement(filmControls.getElement(), filmFavorite.getElement(), RenderPosition.BEFOREEND);
};

for (let i = 0; i < constants.RENDER_FILMS_COUNT; i++) {
  renderFilmCard(filmListContainer, films[i]);
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

/* Insert Main Navigation List */

const topNavList = new TopNavClass();
renderElement(topNavContainer, topNavList.getElement(), RenderPosition.AFTERBEGIN);

/* Insert Filters */
const filterItemHistory = new FilterItemClass(films, `history`, `History`);
renderElement(topNavList.getElement(), filterItemHistory.getElement(), RenderPosition.AFTERBEGIN);

const filterItemWatchList = new FilterItemClass(films, `watchlist`, `Watchlist`);
renderElement(topNavList.getElement(), filterItemWatchList.getElement(), RenderPosition.AFTERBEGIN);

const filterItemFavorites = new FilterItemClass(films, `favorites`, `Favorites`);
renderElement(topNavList.getElement(), filterItemFavorites.getElement(), RenderPosition.AFTERBEGIN);

const filterItemAll = new FilterItemClass(films, `all`, `All`);
renderElement(topNavList.getElement(), filterItemAll.getElement(), RenderPosition.AFTERBEGIN);

const removeActiveClass = () => {
  const filterItems = document.querySelectorAll(`.main-navigation__item`);
  filterItems.forEach((item) => {
    item.classList.remove(`main-navigation__item--active`);
  });
};

filterItemAll.setClickHandler(() => {
  removeActiveClass();
  const filterElement = filterItemAll.getElement();
  filterElement.classList.remove(`main-navigation__item--active`);
  if (filterElement.classList.contains(`main-navigation__item--active`)) {
    filterElement.classList.remove(`main-navigation__item--active`);
  } else {
    filterElement.classList.add(`main-navigation__item--active`);
  }
  const filmsListContainer = document.querySelector(`.films-list__container`);
  renderWithoutFilter(filmsListContainer, films, renderFilmCard);
});

filterItemHistory.setClickHandler(() => {
  removeActiveClass();
  const filterElement = filterItemHistory.getElement();
  filterElement.classList.remove(`main-navigation__item--active`);
  if (filterElement.classList.contains(`main-navigation__item--active`)) {
    filterElement.classList.remove(`main-navigation__item--active`);
  } else {
    filterElement.classList.add(`main-navigation__item--active`);
  }
  const filmsListContainer = document.querySelector(`.films-list__container`);
  renderWithFilter(filmsListContainer, films, constants.FilterNames.history, renderFilmCard);
});

filterItemWatchList.setClickHandler(() => {
  removeActiveClass();
  const filterElement = filterItemWatchList.getElement();
  filterElement.classList.remove(`main-navigation__item--active`);
  if (filterElement.classList.contains(`main-navigation__item--active`)) {
    filterElement.classList.remove(`main-navigation__item--active`);
  } else {
    filterElement.classList.add(`main-navigation__item--active`);
  }
  const filmsListContainer = document.querySelector(`.films-list__container`);
  renderWithFilter(filmsListContainer, films, constants.FilterNames.watchlist, renderFilmCard);
});

filterItemFavorites.setClickHandler(() => {
  removeActiveClass();
  const filterElement = filterItemFavorites.getElement();
  filterElement.classList.remove(`main-navigation__item--active`);
  if (filterElement.classList.contains(`main-navigation__item--active`)) {
    filterElement.classList.remove(`main-navigation__item--active`);
  } else {
    filterElement.classList.add(`main-navigation__item--active`);
  }
  const filmsListContainer = document.querySelector(`.films-list__container`);
  renderWithFilter(filmsListContainer, films, constants.FilterNames.favorites, renderFilmCard);
});

/* Create top rated */
const topRatedContainer = topRatedList.querySelector(`.films-list__container`);

const renderTopRatedFilms = (filmsArray) => {
  const filteredFilms = filmsArray.filter((item) => item.rating >= 5);
  filteredFilms.forEach((item) => {
    renderFilmCard(topRatedContainer, item);
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
    renderFilmCard(mostCommentedContainer, item);
  });
};

renderMostCommentedFilms(films);

const footerStatisticsBlock = footerBlock.querySelector(`.footer__statistics`);

renderElement(footerStatisticsBlock, new FooterMoviesCountClass(films).getElement(), RenderPosition.BEFOREEND);


/* Shows popup when click on the film card */
const renderPopUp = (film) => {

  const {
    name,
    description,
    poster,
    comments,
    watchlist,
    ageRating
  } = film;

  const popUp = new FilmPopUpClass();
  renderElement(footerBlock, popUp.getElement(), RenderPosition.BEFOREEND);

  const popUpForm = new PopUpFormClass();
  renderElement(popUp.getElement(), popUpForm.getElement(), RenderPosition.BEFOREEND);

  const popUpTopContainer = new PopUpTopContainerClass();
  renderElement(popUpForm.getElement(), popUpTopContainer.getElement(), RenderPosition.BEFOREEND);

  const popUpClose = new PopUpCloseClass();
  renderElement(popUpTopContainer.getElement(), popUpClose.getElement(), RenderPosition.BEFOREEND);
  popUpClose.setClickHandler(() => {
    const popUpCloseButton = popUp.getElement().querySelector(`.film-details__close-btn`);
    popUp.getElement().remove();
    popUpCloseButton.removeEventListener(`click`, popUpCloseButton);
    document.removeEventListener(`keydown`, pressEscapeOnPopup);
  });

  const popUpInfoWrap = new PopUpInfoWrapClass();
  renderElement(popUpTopContainer.getElement(), popUpInfoWrap.getElement(), RenderPosition.BEFOREEND);

  const popUpPoster = new PopUpPosterClass();
  renderElement(popUpInfoWrap.getElement(), popUpPoster.getElement(), RenderPosition.BEFOREEND);

  const popUpPosterImg = new PopUpPosterImgClass(poster, name);
  renderElement(popUpPoster.getElement(), popUpPosterImg.getElement(), RenderPosition.BEFOREEND);

  const popUpPosterRating = new PopUpPosterRatingClass(ageRating);
  renderElement(popUpPoster.getElement(), popUpPosterRating.getElement(), RenderPosition.BEFOREEND);

  const popUpDetailsContainer = new PopUpDetailsContainerClass(film);
  renderElement(popUpInfoWrap.getElement(), popUpDetailsContainer.getElement(), RenderPosition.BEFOREEND);

  const popUpDescription = new PopUpDescriptionClass(description);
  renderElement(popUpDetailsContainer.getElement(), popUpDescription.getElement(), RenderPosition.BEFOREEND);

  const popUpControls = new PopUpControlsClass(watchlist);
  renderElement(popUpTopContainer.getElement(), popUpControls.getElement(), RenderPosition.BEFOREEND);

  const popUpBottomContainer = new PopUpBottomContainerClass();
  renderElement(popUp.getElement(), popUpBottomContainer.getElement(), RenderPosition.BEFOREEND);

  const popUpCommentsWrap = new PopUpCommentsWrapClass();
  renderElement(popUpBottomContainer.getElement(), popUpCommentsWrap.getElement(), RenderPosition.BEFOREEND);

  const popUpCommentsTitle = new PopUpCommentsTitleClass(comments);
  renderElement(popUpCommentsWrap.getElement(), popUpCommentsTitle.getElement(), RenderPosition.BEFOREEND);

  const popUpCommentsList = new PopUpCommentsListClass(comments);
  renderElement(popUpCommentsWrap.getElement(), popUpCommentsList.getElement(), RenderPosition.BEFOREEND);

  const popUpCommentsForm = new PopUpCommentsFormClass();
  renderElement(popUpCommentsWrap.getElement(), popUpCommentsForm.getElement(), RenderPosition.BEFOREEND);
};

const closePopUp = () => {
  document.querySelector(`.film-details`).remove();
};
const pressEscapeOnPopup = (evt) => {
  checkKeyDownEvent(evt, `Escape`, closePopUp);
};
document.addEventListener(`keydown`, pressEscapeOnPopup);


/* Show more films render */
const showMoreFilms = (filmsToShow) => {
  const moreButton = document.querySelector(`.films-list__show-more`);
  if (moreButton) {
    moreButton.remove();
  }
  if (filmsToShow.length > constants.FILMS_COUNT_PER_STEP) {
    const showMoreButtonComponent = new ShowMoreButtonClass();
    renderElement(filmListContainer, showMoreButtonComponent.getElement(), RenderPosition.AFTEREND);
    showMoreButtonComponent.setClickHandler(() => {
      filmsToShow
      .slice(constants.RENDER_FILMS_COUNT, constants.RENDER_FILMS_COUNT + constants.FILMS_COUNT_PER_STEP)
      .forEach((film) => {
        renderFilmCard(filmListContainer, film);
      });
      constants.RENDER_FILMS_COUNT += constants.FILMS_COUNT_PER_STEP;
      if (constants.RENDER_FILMS_COUNT >= films.length) {
        showMoreButtonComponent.setClickHandler(() => {
          showMoreButtonComponent.getElement().remove();
        });
      }
    });
  }
};
showMoreFilms(films);
