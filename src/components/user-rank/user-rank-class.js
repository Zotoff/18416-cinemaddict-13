import AbstractClass from '../../classes/Abstract';
import {createUserRank} from './userRankView';

export default class UserRank extends AbstractClass {
  getTemplate() {
    return createUserRank();
  }
}
