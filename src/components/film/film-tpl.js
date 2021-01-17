export const filmView = (film) => {
  const {name, rating, year, duration, poster, description, watchlist, watched, favorites} = film;
  return `<article class="film-card">
    <h3 class="film-card__title">${name}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
    </p>
    <img src="images/posters/${poster}" alt="${name}" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlist ? `film-card__controls-item--active` : ``}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watched ? `film-card__controls-item--active` : ``}" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${favorites ? `film-card__controls-item--active` : ``}" type="button">Mark as favorite</button>
    </div>
    </article>`;
};
