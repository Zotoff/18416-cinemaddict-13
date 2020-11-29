import {getRandomInteger} from '../utils/utils.js';
export const generateFilmGenre = () => {
  const genres = [
    `Thriller`,
    `Western`,
    `Comedy`,
    `Erotic`,
    `Drama`,
    `Horror`,
    `Sci-Fi`
  ];

  const randomIndex = getRandomInteger(0, genres.length - 1);
  const genre = genres[randomIndex];
  return genre;
};
