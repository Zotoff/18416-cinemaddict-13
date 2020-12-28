import AbstractClass from '../../classes/Abstract';
import {createMainMenu} from './mainMenuView.js';


export default class MainMenu extends AbstractClass {
  getTemplate() {
    return createMainMenu();
  }
}
