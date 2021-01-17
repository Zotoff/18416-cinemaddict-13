import AbstractClass from '../abstract/abstract';
import {createUserRank} from './user-rank-view';

export default class UserRank extends AbstractClass {
  getTemplate() {
    return createUserRank();
  }
}
