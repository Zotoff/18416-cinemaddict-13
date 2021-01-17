import Abstract from "../abstract/abstract";
import {FilmListTitles} from '../../constants/constants';

export default class FilmsBoard extends Abstract {
  constructor(title) {
    super();
    this._title = title;
  }

  getTemplate() {
    return `<section class="films-list ${this._title === FilmListTitles.ALL ? `` : `films-list--extra`}">
    <h2 class="films-list__title ${this._title === FilmListTitles.ALL ? `visually-hidden` : ``}">${this._title}</h2>
  </section>`;
  }
}
