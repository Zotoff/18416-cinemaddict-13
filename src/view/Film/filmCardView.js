export const createFilmCardView = (film) => {
  const {id} = film;
  return `<article class="film-card" data-id="${id}"></div></article>`;
};

