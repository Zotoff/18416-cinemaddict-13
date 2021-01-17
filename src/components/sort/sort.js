import AbstractView from "../abstract/abstract";
import {createSortTemplate} from './sort-tpl';

export default class Sort extends AbstractView {
  getTemplate() {
    return createSortTemplate();
  }
}
