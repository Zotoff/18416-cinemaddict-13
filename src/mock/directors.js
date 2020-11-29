import {getRandomInteger} from '../utils/utils.js';

export const generateFilmDirector = () => {
  const directorNames = [
    `Квентин`,
    `Федор`,
    `Кекс`,
    `Аль`,
    `Василий`
  ];

  const directorLastNames = [
    `Тарантино`,
    `Пупкин`,
    `Бондарчук`,
    `Пачино`,
    `Македонский`
  ];

  const randomNameIndex = getRandomInteger(0, directorNames.length - 1);
  const randomLastNameIndex = getRandomInteger(0, directorLastNames.length - 1);

  const director = `${directorNames[randomNameIndex]} ${directorLastNames[randomLastNameIndex]}`;
  return director;
};
