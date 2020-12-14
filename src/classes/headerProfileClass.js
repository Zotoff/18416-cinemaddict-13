import AbstractClass from '../classes/Abstract';
import {createHeaderProfile} from '../view/headerProfileView';
export default class HeaderProfile extends AbstractClass {
  getTemplate() {
    return createHeaderProfile();
  }
}
