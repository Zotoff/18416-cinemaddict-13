import AbstractClass from '../classes/Abstract';
import {createUserRank} from '../view/userRankView';

export default class UserRank extends AbstractClass {
  getTemplate() {
    return createUserRank();
  }
}
