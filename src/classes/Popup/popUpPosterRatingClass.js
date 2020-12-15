import AbstractClass from '../Abstract';
import {createPopUpPosterRating} from '../../view/Popup/popUpPosterRatingView';

export default class PopUpPosterRatingClass extends AbstractClass {
  constructor(ageRating) {
    super();
    this._ageRating = ageRating;
  }
  getTemplate() {
    return createPopUpPosterRating(this._ageRating);
  }
}

