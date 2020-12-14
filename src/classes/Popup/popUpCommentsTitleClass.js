import AbstractClass from '../Abstract';
import {createPopUpCommentsTitle} from '../../view/Popup/popUpCommentsTitleView';

export default class PopUpCommentsTitleClass extends AbstractClass {
  constructor(comments) {
    super();
    this._comments = comments;
  }
  getTemplate() {
    return createPopUpCommentsTitle(this._comments);
  }
}
