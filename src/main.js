import FooterMoviesCountClass from './components/footer-movies-count/footer-movies-count.js';
import HeaderProfileClass from './components/header-profile/header-profile.js';
import UserRankClass from './components/user-rank/user-rank-class.js';
import MainMenuClass from "./components/main-menu/main-menu-class";

import {generateFilm} from '../src/mock/film.js';
import {renderElement} from './utils/render.js';
import {Film, RenderPosition} from './constants/constants';

import FilmListPresenter from './presenter/FilmList';
import TopRatedFilmsPresenter from './presenter/TopRatedFilms';
import MostCommentedFilmsPresenter from "./presenter/MostCommentedFilms";
import TopNavPresenter from "./presenter/TopNavPresenter";

const mainBlock = document.querySelector(`.main`);
const headerBlock = document.querySelector(`.header`);
const footerBlock = document.querySelector(`.footer`);

const films = new Array(Film.FILMS_COUNT).fill().map(generateFilm);

renderElement(mainBlock, new MainMenuClass().getElement(), RenderPosition.AFTERBEGIN);
renderElement(headerBlock, new HeaderProfileClass().getElement(), RenderPosition.BEFOREEND);

const headerProfile = document.querySelector(`.header__profile`);

renderElement(headerProfile, new UserRankClass().getElement(), RenderPosition.AFTERBEGIN);

/* TopNav */
const topNavContainer = document.querySelector(`.main-navigation`);
const topNavPresenter = new TopNavPresenter(topNavContainer, films);
topNavPresenter.init();

/* Films List */
const filmPresenter = new FilmListPresenter(mainBlock, films);
filmPresenter.init();

/* Create extra film list*/
const topRatedFilmPresenter = new TopRatedFilmsPresenter(mainBlock, `.films-list__container`, films, `Top rated`);
topRatedFilmPresenter.init();

/* Create Most Commented film list */
const mostCommentedFilmPresenter = new MostCommentedFilmsPresenter(mainBlock, `.films-list__container`, films, `Most Commented`);
mostCommentedFilmPresenter.init();

const footerStatisticsBlock = footerBlock.querySelector(`.footer__statistics`);
renderElement(footerStatisticsBlock, new FooterMoviesCountClass(films).getElement(), RenderPosition.BEFOREEND);


