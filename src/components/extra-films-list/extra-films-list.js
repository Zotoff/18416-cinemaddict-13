import AbstractClass from '../../classes/Abstract';
import {extraFilmView} from './extraFilmTpl.js';

export default class ExtraFilmListClass extends AbstractClass {
  constructor(heading) {
    super();
    this._heading = heading;
  }
  getTemplate() {
    return extraFilmView(this._heading);
  }
}
