import {getRandomInteger} from '../utils/utils.js';

export const generateFilmActor = () => {
  const actorNames = [
    `Никита`,
    `Федор`,
    `Кекс`,
    `Аль`,
    `Василий`
  ];

  const actorLastNames = [
    `Михалковский`,
    `Пупкин`,
    `Бондарчук`,
    `Пачино`,
    `Македонский`
  ];

  const randomNameIndex = getRandomInteger(0, actorNames.length - 1);
  const randomLastNameIndex = getRandomInteger(0, actorLastNames.length - 1);

  const actor = `${actorNames[randomNameIndex]} ${actorLastNames[randomLastNameIndex]}`;
  return actor;
};
