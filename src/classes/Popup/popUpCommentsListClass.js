import AbstractClass from '../Abstract';
import {createPopUpCommentsList} from '../../view/Popup/popUpCommentsListView';

export default class PopUpCommentsListClass extends AbstractClass {
  constructor(comments) {
    super();
    this._comments = comments;
  }
  getTemplate() {
    return createPopUpCommentsList(this._comments);
  }
}
