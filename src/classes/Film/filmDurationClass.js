import AbstractClass from '../Abstract';
import {createFilmDurationView} from '../../view/Film/filmDurationView.js';


export default class FilmDurationClass extends AbstractClass {
  constructor(duration) {
    super();
    this._duration = duration;
  }
  getTemplate() {
    return createFilmDurationView(this._duration);
  }
}
