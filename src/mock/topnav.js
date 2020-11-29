export const createTopNav = (films) => {
  const countItemsToFilter = (property) => {
    const filteredFilms = films.filter((item) => {
      if (item[property] === true) {
        return item;
      } else {
        return undefined;
      }
    });
    const filteredLength = filteredFilms.length;
    return filteredLength;
  };
  return `
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${countItemsToFilter(`watchlist`)}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${countItemsToFilter(`history`)}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${countItemsToFilter(`favorites`)}</span></a>
    </div>`;
};