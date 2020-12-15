import AbstractClass from '../Abstract';
import {createFilmCommentsView} from '../../view/Film/filmCommentsView';


export default class FilmCommentsClass extends AbstractClass {
  constructor(comments) {
    super();
    this._comments = comments;
  }
  getTemplate() {
    return createFilmCommentsView(this._comments);
  }
}
