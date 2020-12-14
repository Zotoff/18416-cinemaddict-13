import AbstractClass from '../Abstract';
import {createPopUpCommentItem} from '../../view/Popup/popUpCommentItemView';

export default class PopUpCommentItemClass extends AbstractClass {
  constructor(comments) {
    super();
    this._comments = comments;
  }
  getTemplate() {
    return createPopUpCommentItem(this._comments);
  }
}
