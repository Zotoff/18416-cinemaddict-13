export const createFilmPosterView = (title, poster) => {
  return `<img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">`;
};
