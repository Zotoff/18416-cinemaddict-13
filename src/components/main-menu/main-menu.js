import AbstractClass from '../abstract/abstract';
import {createMainMenu} from './main-menu-view';


export default class MainMenu extends AbstractClass {
  getTemplate() {
    return createMainMenu();
  }
}
