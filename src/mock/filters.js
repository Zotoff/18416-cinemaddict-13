const filmToFilterMap = {
  all: (films) => films.length,
  watchlist: (films) => films.filter((film) => film.watchlist).length,
  history: (films) => films.filter((film) => film.watched).length,
  favorites: (films) => films.filter((film) => film.favorites).length,
};

export const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films),
    };
  });
};
