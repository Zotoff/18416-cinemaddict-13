import AbstractClass from '../abstract/abstract';
import {createHeaderProfile} from './header-profile-view';
export default class HeaderProfile extends AbstractClass {
  getTemplate() {
    return createHeaderProfile();
  }
}
