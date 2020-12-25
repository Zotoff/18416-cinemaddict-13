import AbstractClass from '../../classes/Abstract';
import {filmListView} from './filmListTpl';

export default class FilmList extends AbstractClass {
  getTemplate() {
    return filmListView();
  }
}
