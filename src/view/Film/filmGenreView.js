const generateGenre = (genre) => {
  return genre.map((item) => `
    ${item}
  `).join(``);
};

export const createFilmGenreView = (genre) => {
  return `<span class="film-card__genre">${generateGenre(genre)}</span>`;
};
