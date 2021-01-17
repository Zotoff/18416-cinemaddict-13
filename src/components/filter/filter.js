import Abstract from "../abstract/abstract";
import {upperFirst} from "../../utils/utils";

const createFilterItemTemplate = ({name, count}, isActive) => {

  return (
    `<a href="#${name}"
        class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
        ${name === `all` ? `All movies` : `${upperFirst(name)}`}
        ${name !== `all` ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
  );
};

const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join(``);

  return `<div class="main-navigation__items">
    ${filterItemsTemplate}
  </div>`;
};

export default class Filter extends Abstract {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
