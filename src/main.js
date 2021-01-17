import FooterMoviesCountClass from './components/footer-movies-count/footer-movies-count.js';
import HeaderProfileClass from './components/header-profile/header-profile.js';
import UserRank from './components/user-rank/user-rank.js';
import MainMenu from "./components/main-menu/main-menu";
import Navigation from './components/navigation/navigation';
import Filter from './components/filter/filter';
import Sort from "./components/sort/sort";

import {generateFilm} from '../src/mock/film.js';
import {generateFilter} from '../src/mock/filters';
import {renderElement, render} from './utils/render.js';
import {Film, RenderPosition} from './constants/constants';

import FilmListPresenter from './presenter/FilmList';

const mainBlock = document.querySelector(`.main`);
const siteBody = document.querySelector(`body`);
const headerBlock = document.querySelector(`.header`);
const footerBlock = document.querySelector(`.footer`);

const films = new Array(Film.FILMS_COUNT).fill().map(generateFilm);
const filters = generateFilter(films);

renderElement(mainBlock, new MainMenu().getElement(), RenderPosition.AFTERBEGIN);
renderElement(headerBlock, new HeaderProfileClass().getElement(), RenderPosition.BEFOREEND);

const headerProfile = document.querySelector(`.header__profile`);
renderElement(headerProfile, new UserRank().getElement(), RenderPosition.AFTERBEGIN);

const NavigationView = new Navigation();
const FilterView = new Filter(filters);
const SortView = new Sort();
render(mainBlock, NavigationView, RenderPosition.BEFOREEND);
render(NavigationView, FilterView, RenderPosition.BEFOREEND);
render(mainBlock, SortView, RenderPosition.BEFOREEND);

/* Films List */
const filmPresenter = new FilmListPresenter(mainBlock, films, siteBody);
filmPresenter.init(films);

const footerStatisticsBlock = footerBlock.querySelector(`.footer__statistics`);
renderElement(footerStatisticsBlock, new FooterMoviesCountClass(films).getElement(), RenderPosition.BEFOREEND);


