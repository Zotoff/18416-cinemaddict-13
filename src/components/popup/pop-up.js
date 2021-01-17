import AbstractClass from '../abstract/abstract';
import {generateComments, generateGenre} from "../../utils/utils";

const createPopUpView = (data) => {
  const {name, poster, ageRating, originalName, rating, director, writers, actors, releaseDate, duration, country, genres, description, comments, watchlist, favorites, watched} = data;
  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}" alt="${name}">

          <p class="film-details__age">${ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${name}</h3>
              <p class="film-details__title-original">Original: ${originalName}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers.join(` `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors.join(` `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${releaseDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genres.length > 0 ? `Genres` : `Genre`}</td>
              <td class="film-details__cell">
                ${generateGenre(genres)}
            </tr>
          </table>

          <p class="film-details__film-description">
            ${description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist ${watchlist ? `film-card__controls-item--active` : ``}">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
        <label for="watched" class="film-details__control-label film-details__control-label--watched ${watched ? `film-card__controls-item--active` : ``}">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite ${favorites ? `film-card__controls-item--active` : ``}">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">${generateComments(comments)}</ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label">
            <img src="images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
          </div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">Great movie!</textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" checked>
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>`;
};

export default class PopUpClass extends AbstractClass {
  constructor(film) {
    super();
    // this._film = film;
    this._data = PopUpClass.parseFilmToData(film); // create local state
    this._closeButtonClickHandler = this._closeButtonClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate() {
    return createPopUpView(this._data);
  }

  restoreHandlers() {
    this._setInnerHandlers();
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelector(`.film-details__control-label--watched`)
      .addEventListener(`click`, this._watchedClickHandler);
    this.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, this._closeButtonClickHandler);
    this.getElement()
      .querySelector(`.film-details__inner`)
      .addEventListener(`click`, this._formSubmitHandler);
  }

  _closeButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.click(); // ставим ссылку на обработчик, чтобы потом заново навесить его
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this.updateData({
      watched: !this._data.watched
    });
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.formSubmit(PopUpClass.parseDataToFilm(this._data));
  }

  // setFormSubmitHandler(callback) {
  //   this._callback.formSubmit = callback;
  //   this.getElement.querySelector(`.film-details__inner`).addEventListener(`submit`, this._formSubmitHandler);
  // }

  // setCloseButtonClickHandler(callback) {
  //   this._callback.click = callback;
  //   const popUpCloseBtn = this.getElement().querySelector(`.film-details__close-btn`);
  //   popUpCloseBtn.addEventListener(`click`, this._closeButtonClickHandler);
  // }
  //
  // setWatchedClickHandler(callback) {
  //   this._callback.click = callback;
  //   const watchedButton = this.getElement().querySelector(`.film-details__control-label--watched`);
  //   watchedButton.addEventListener(`click`, this._watchedClickHandler);
  // }


  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();
    parent.replaceChild(newElement, prevElement);
    this.restoreHandlers();
  }

  updateData(update, isFormUpdating) {
    if (!update) {
      return;
    }
    this._data = Object.assign(
        {},
        this._data,
        update
    );

    if (isFormUpdating) {
      return;
    }
    this.updateElement();
  }

  static parseFilmToData(film) {
    return Object.assign(
        {},
        film,
        {
          watchlist: film.watchlist !== null,
          watched: film.watched !== null,
          favorites: film.favorites !== null
        }
    );
  }
  // Give info to presenter
  static parseDataToFilm(data) {
    let film = Object.assign({}, data);

    if (!film.watched) {
      film.watched = null;
    }
    if (!film.favorites) {
      film.favorites = null;
    }
    if (!film.watchlist) {
      film.watchlist = null;
    }

    // Delete the flags for View logic. Or i should return them to presenter?
    // delete film.favorites;
    // delete film.watched;
    // delete film.watchlist;

    return film;
  }
}

