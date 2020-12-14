import AbstractClass from '../Abstract';
import {createExtraFilmsList} from '../../view/Film/filmsListExtraView';
export default class ExtraFilmList extends AbstractClass {
  getTemplate() {
    return createExtraFilmsList();
  }
}
