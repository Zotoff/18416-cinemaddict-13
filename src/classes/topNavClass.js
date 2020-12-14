import AbstractClass from '../classes/Abstract';
import {createTopNav} from '../view/topNavView';

export default class TopNav extends AbstractClass {
  constructor(films) {
    super();
    this._films = films;
  }

  getTemplate() {
    return createTopNav(this._films);
  }
}

