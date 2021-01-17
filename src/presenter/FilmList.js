import {render, remove} from "../utils/render.js";
import {Film, RenderPosition, FilmListTitles} from '../constants/constants';
import {updateItem, sortByComments, sortByRating} from '../utils/utils';
import FilmList from '../components/film-list/film-list';
import FilmPresenter from '../presenter/Film';

import MainContent from "../components/main-content/main-content";
import ShowMoreButton from "../components/show-more/show-more-button";
import Filter from '../components/filter/filter';
import FilmsBoard from "../components/films-board/films-board";

export default class FilmListPresenter {
  constructor(container, films, siteBody) {
    this._filmsContainer = container;
    this._ShowMoreButton = new ShowMoreButton();
    this._films = films;
    this._siteBody = siteBody;
    this._filmsToRender = Film.FILMS_COUNT_PER_STEP;

    this._filmPresenter = {};
    this._topRatedFilmPresenter = {};
    this._mostCommentedFilmPresenter = {};

    this._mainContent = new MainContent();
    this._filmsBoard = new FilmsBoard(FilmListTitles.ALL);
    this._filter = new Filter();
    this._showMoreButton = new ShowMoreButton();
    this._filmsListComponent = new FilmList();
    this._topRatedFilmsBoard = new FilmsBoard(
        FilmListTitles.TOP_RATED
    );
    this._mostCommentedBoard = new FilmsBoard(
        FilmListTitles.MOST_COMMENTED
    );

    this._handleShowMoreButton = this._handleShowMoreButton.bind(this);
    this._renderShowMoreButton = this._renderShowMoreButton.bind(this);
    this._renderFilmsList = this._renderFilmsList.bind(this);
    this._renderFilm = this._renderFilm.bind(this);
    this._handleFilmChange = this._handleFilmChange.bind(this);
  }

  init(films) {
    this._films = films.slice();

    render(
        this._filmsContainer,
        this._mainContent,
        RenderPosition.BEFOREEND
    );

    render(
        this._mainContent,
        this._filmsBoard,
        RenderPosition.BEFOREEND
    );

    render(
        this._filmsBoard,
        this._filmsListComponent,
        RenderPosition.BEFOREEND
    );

    this._renderFilmsList();
  }

  _renderFilm(film, container, presenter) {
    const FilmCard = new FilmPresenter(
        container,
        film,
        this._siteBody,
        this._handleFilmChange,
        this._handleModeChange
    );
    FilmCard.init(film);
    presenter[film.id] = FilmCard;
  }

  _renderFilms(from, to) {
    this._films
      .slice(from, to)
      .forEach((filmItem) =>
        this._renderFilm(
            filmItem,
            this._filmsListComponent,
            this._filmPresenter
        )
      );
    this._renderTopRatedList();
    this._renderMostCommentedList();
  }

  _renderFilmsList() {
    this._renderFilms(0, 5);
    this._renderShowMoreButton();
  }

  _handleShowMoreButton() {
    this._films
      .slice(
          this._filmsToRender,
          this._filmsToRender + Film.FILMS_COUNT_PER_STEP
      )
      .forEach((film) => {
        this._renderFilm(
            film,
            this._filmsListComponent,
            this._filmPresenter
        );
      });
    this._filmsToRender += Film.FILMS_COUNT_PER_STEP;
    if (this._filmsToRender >= this._films.length) {
      remove(this._showMoreButton);
    }
  }

  _handleFilmChange(updatedFilm) {
    this._films = updateItem(this._films, updatedFilm);
    this._updatePresenter(this._filmPresenter, updatedFilm);
    this._updatePresenter(this._topRatedFilmPresenter, updatedFilm);
    this._updatePresenter(this._mostCommentedFilmPresenter, updatedFilm);
  }

  _handleModeChange() {
    Object.values(this._filmPresenter).forEach((presenter) =>
      presenter.resetView()
    );
  }

  _updatePresenter(presenter, updatedFilm) {
    if (presenter.hasOwnProperty(updatedFilm.id)) {
      presenter[updatedFilm.id].init(updatedFilm);
    }
  }

  _renderShowMoreButton() {
    render(this._mainContent, this._showMoreButton, RenderPosition.BEFOREEND);
    this._showMoreButton.setClickHandler(
        this._handleShowMoreButton
    );
  }

  _renderTopRatedList() {
    const topRatedFilmsListComponent = new FilmList();
    render(
        this._filmsContainer,
        this._topRatedFilmsBoard,
        RenderPosition.BEFOREEND
    );
    render(
        this._topRatedFilmsBoard,
        topRatedFilmsListComponent,
        RenderPosition.BEFOREEND
    );

    sortByRating(this._films)
      .slice(0, 2)
      .forEach((film) => {
        this._renderFilm(
            film,
            topRatedFilmsListComponent,
            this._topRatedFilmPresenter
        );
      });
  }
  _renderMostCommentedList() {
    const mostCommentedListComponent = new FilmList();
    render(
        this._filmsContainer,
        this._mostCommentedBoard,
        RenderPosition.BEFOREEND
    );
    render(
        this._mostCommentedBoard,
        mostCommentedListComponent,
        RenderPosition.BEFOREEND
    );

    sortByComments(this._films)
      .slice(0, 2)
      .forEach((film) => {
        this._renderFilm(
            film,
            mostCommentedListComponent,
            this._mostCommentedFilmPresenter
        );
      });
  }
}


