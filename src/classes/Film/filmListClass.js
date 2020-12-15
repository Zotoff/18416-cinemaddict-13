import AbstractClass from '../Abstract';
import {createFilmListView} from '../../view/Film/filmListView';

export default class FilmList extends AbstractClass {
  getTemplate() {
    return createFilmListView();
  }
}
