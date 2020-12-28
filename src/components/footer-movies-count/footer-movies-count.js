import AbstractClass from '../../classes/Abstract';
import {createFooterMoviesCount} from './footerMoviesCountView';


export default class FooterMoviesCount extends AbstractClass {
  constructor(films) {
    super();
    this._films = films;
  }
  getTemplate() {
    return createFooterMoviesCount(this._films);
  }
}
