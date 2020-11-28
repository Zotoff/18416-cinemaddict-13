import dayjs from 'dayjs';

import {getRandomInteger} from '../utils/utils.js';

const generateCommentAuthor = () => {
  const authors = [
    `Иван`,
    `Петр`,
    `Кекс`,
    `Мария`,
    `Павел`
  ];
  const randomIndex = getRandomInteger(0, authors.length - 1);
  return authors[randomIndex];
};

const generateEmotion = () => {
  const emotions = [
    `smile`,
    `puke`,
    `sleeping`,
    `smile`
  ];
  const randomIndex = getRandomInteger(0, emotions.length - 1);
  return emotions[randomIndex];
};

const generateMessage = () => {
  const messages = [
    `Фильм понравился. Правда начало не зацепило`,
    `Отличный фильм, и режиссер золотко`,
    `Полный отстой!`,
    `А что, с пивком потянет`
  ];
  const randomIndex = getRandomInteger(0, messages.length - 1);
  return messages[randomIndex];
};

export const generateComment = () => {
  return {
    author: generateCommentAuthor(),
    date: dayjs().format(`YYYY/MM/DD HH:MM`),
    emotion: generateEmotion(),
    message: generateMessage(),
  };
};
