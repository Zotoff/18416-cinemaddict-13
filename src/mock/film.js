import {getRandomInteger} from '../utils/utils.js';
import {generateComment} from './comment.js';
import {generateFilmDirector} from './directors.js';
import {generateFilmWriter} from './writers.js';
import {generateFilmActor} from './actors.js';
import {countryList} from './countries.js';
import {generateFilmGenre} from './genres.js';
import {filmMockUp} from '../constants/constants';

const comments = new Array(getRandomInteger(1, filmMockUp.MAX_COMMENTS)).fill().map(generateComment);
const director = generateFilmDirector();
const writers = new Array(filmMockUp.MAX_WRITERS).fill().map(generateFilmWriter);
const actors = new Array(filmMockUp.MAX_ACTORS).fill().map(generateFilmActor);
const genres = new Array(filmMockUp.MAX_GENRES).fill().map(generateFilmGenre);

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

let releaseDate = {
  year: undefined,
  month: undefined,
  date: undefined
};

let releaseDateString;

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

  releaseDate.year = year;
  releaseDate.month = month;
  releaseDate.date = date;

  releaseDateString = `${date} ${month} ${year}`;
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

let id = 0;

generateFilmReleaseDate();

export const generateFilm = () => {
  return {
    id: id++,
    name: generateFilmName(),
    originalName: generateFilmName(),
    description: generateDescription(),
    poster: generateFilmPoster(),
    comments,
    year: releaseDate.year,
    duration: generateFilmLength(),
    commentsCount: comments.length,
    watchlist: Boolean(getRandomInteger(0, 1)),
    history: Boolean(getRandomInteger(0, 1)),
    favorites: Boolean(getRandomInteger(0, 1)),
    rating: getRandomInteger(0, 10),
    director,
    writers,
    actors,
    releaseDate: releaseDateString,
    country: generateFilmCountry(),
    genres,
    ageRating: generateFilmAgeRating()
  };
};
