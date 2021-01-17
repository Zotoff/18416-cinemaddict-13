import AbstractClass from '../abstract/abstract';
import {filmListView} from './film-list-tpl';

export default class FilmList extends AbstractClass {
  getTemplate() {
    return filmListView();
  }
}
