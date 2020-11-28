import {getRandomInteger} from '../utils/utils.js';

export const generateFilmWriter = () => {
  const writerNames = [
    `Иван`,
    `Федор`,
    `Кекс`,
    `Аль`,
    `Василий`
  ];

  const writerLastNames = [
    `Петров`,
    `Пупкин`,
    `Бондарчук`,
    `Пачино`,
    `Македонский`
  ];

  const randomNameIndex = getRandomInteger(0, writerNames.length - 1);
  const randomLastNameIndex = getRandomInteger(0, writerLastNames.length - 1);

  const writer = `${writerNames[randomNameIndex]} ${writerLastNames[randomLastNameIndex]}`;
  return writer;
};
