import {dayjs} from 'dayjs';
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
export const generateDate = () => {
  const isDate = Boolean(getRandomInteger(0, 1));

  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;

  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, `day`).toDate();
};

export const checkKeyDownEvent = (evt, key, cb) => {
  if (evt.key === key) {
    cb();
  }
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.childNodes[0];
};

export const removeFilmCards = () => {
  const filmCardsContainer = document.querySelector(`.films-list__container`);
  const filmCardsList = filmCardsContainer.querySelectorAll(`.film-card`);
  filmCardsList.forEach((card) => {
    card.remove();
  });
};

export const countItemsToFilter = (films, property) => {
  const filteredFilms = films.filter((item) => {
    if (item[property] === true) {
      return item;
    } else {
      return undefined;
    }
  });
  const filteredLength = filteredFilms.length;
  return filteredLength;
};

export const checkGenres = (genres) => {
  if (genres.length === 1) {
    return `Genre`;
  } else {
    return `Genres`;
  }
};

export const generateGenre = (genres) => {
  return genres.map((genre) => `
      <span class="film-details__genre">${genre}</span>
    `).join(``);
};

export const generateComments = (comments) => {
  return comments.map((comment) => `
    <li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile">
        </span>
        <div>
          <p class="film-details__comment-text">${comment.message}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${comment.author}</span>
            <span class="film-details__comment-day">${comment.date}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>
  `).join(``);
};
