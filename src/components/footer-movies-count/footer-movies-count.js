import AbstractClass from '../abstract/abstract';
import {createFooterMoviesCount} from './footer-movies-count-tpl';


export default class FooterMoviesCount extends AbstractClass {
  constructor(films) {
    super();
    this._films = films;
  }
  getTemplate() {
    return createFooterMoviesCount(this._films);
  }
}
