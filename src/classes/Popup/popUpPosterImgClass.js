import AbstractClass from '../Abstract';
import {createPopUpPosterImg} from '../../view/Popup/popUpPosterImgView';

export default class PopUpPosterImgClass extends AbstractClass {
  constructor(img, name) {
    super();
    this._img = img;
    this._name = name;
  }
  getTemplate() {
    return createPopUpPosterImg(this._img, this._name);
  }
}
