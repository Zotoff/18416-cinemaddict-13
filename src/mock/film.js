import {getRandomInteger} from '../utils/utils.js';
import {generateComment} from './comment.js';
import {generateFilmDirector} from './directors.js';
import {generateFilmWriter} from './writers.js';
import {generateFilmActor} from './actors.js';
import {countryList} from './countries.js';
import {generateFilmGenre} from './genres.js';
import {constants} from '../constants/constants';

const comments = new Array(getRandomInteger(1, constants.MAX_COMMENTS)).fill().map(generateComment);
const director = generateFilmDirector();
const writers = new Array(constants.MAX_WRITERS).fill().map(generateFilmWriter);
const actors = new Array(constants.MAX_ACTORS).fill().map(generateFilmActor);
const genres = new Array(constants.MAX_GENRES).fill().map(generateFilmGenre);

const generateFilmName = () => {
  const names = [
    `Список Шиндлера`,
    `Титаник`,
    `Достучаться до небес`,
    `Цельнометаллическая оболочка`,
    `Девятая рота`,
    `Взвод`,
    `Ярость`,
    `Убить Билла`,
    `Убить Билла, ч. 2`,
    `Троя`
  ];

  const randomIndex = getRandomInteger(0, names.length - 1);
  return names[randomIndex];
};

const generateFilmPoster = () => {
  const posters = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`,
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);
  return posters[randomIndex];
};

const generateFilmYear = () => {
  const yearPrefix = 19;
  const yearSuffix = getRandomInteger(25, 99);
  const year = `${yearPrefix}${yearSuffix}`;
  return +year;
};

const generateFilmLength = () => {
  const hour = getRandomInteger(0, 4);
  const minute = getRandomInteger(0, 60);

  const filmLength = `${hour}h ${minute}m`;
  return filmLength;
};

const generateDescription = () => {
  const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
  const descriptions = descriptionText.split(`.`);

  const randomIndex = getRandomInteger(0, descriptions.length - 1);
  return descriptions[randomIndex];
};

const generateFilmReleaseDate = () => {
  const months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`
  ];
  const date = getRandomInteger(0, 30);
  const year = generateFilmYear();
  const month = months[getRandomInteger(0, months.length - 1)];

  const releaseDate = `${date} ${month} ${year}`;
  return releaseDate;
};

const generateFilmCountry = () => {
  const randomIndex = getRandomInteger(0, countryList.length - 1);
  return countryList[randomIndex];
};

const generateFilmAgeRating = () => {
  const ageRatings = [
    `16+`,
    `18+`,
    `0+`
  ];

  const randomIndex = getRandomInteger(0, ageRatings.length - 1);
  const ageRating = ageRatings[randomIndex];
  return ageRating;
};

let counter = +constants.INITIAL_ID;

export const generateFilm = () => {
  return {
    id: counter++,
    name: generateFilmName(),
    originalName: generateFilmName(),
    description: generateDescription(),
    poster: generateFilmPoster(),
    comments,
    year: generateFilmYear(),
    duration: generateFilmLength(),
    commentsCount: comments.length,
    watchlist: Boolean(getRandomInteger(0, 1)),
    history: Boolean(getRandomInteger(0, 1)),
    favorites: Boolean(getRandomInteger(0, 1)),
    rating: getRandomInteger(0, 10),
    director,
    writers,
    actors,
    releaseDate: generateFilmReleaseDate(),
    country: generateFilmCountry(),
    genres,
    ageRating: generateFilmAgeRating()
  };
};


/*

Дата и год релиза в формате день месяц год (например: «01 April 1995»);
Продолжительность в формате часы минуты (например «1h 36m»);


Название фильма. Можно взять с постеров, а можете взять из списка своих любимых фильмов. Пока это не важно;

Постер (название файла). Один из набора файлов в директории /public/images/posters;

Описание. От 1 до 5 случайных предложений из текста: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.

Комментарии. От 0 до 5 штук;

Обратите внимание, комментарии — это отдельная структура данных с эмоцией, датой, автором и сообщением, а не просто массив строк в структуре фильма.

Остальные данные ограничьте самостоятельно. Что ещё должно быть в структуре, можно узнать из технического задания.

*/
