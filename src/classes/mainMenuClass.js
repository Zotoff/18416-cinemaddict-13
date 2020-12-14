import AbstractClass from '../classes/Abstract';
import {createMainMenu} from '../view/mainMenuView.js';


export default class MainMenu extends AbstractClass {
  getTemplate() {
    return createMainMenu();
  }
}
