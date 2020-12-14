import {countItemsToFilter} from '../utils/utils';

export const createFilterItemView = (films, toggler, text) => {
  if (toggler !== `all`) {
    return `<a href="#${toggler}" class="main-navigation__item">${text} <span class="main-navigation__item-count">${countItemsToFilter(films, toggler)}</span></a>`;
  }
  return `<a href="#${toggler}" class="main-navigation__item">${text} <span class="main-navigation__item-count">${films.length}</span></a>`;
};
