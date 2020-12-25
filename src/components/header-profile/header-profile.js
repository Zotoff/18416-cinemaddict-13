import AbstractClass from '../../classes/Abstract';
import {createHeaderProfile} from './headerProfileView';
export default class HeaderProfile extends AbstractClass {
  getTemplate() {
    return createHeaderProfile();
  }
}
