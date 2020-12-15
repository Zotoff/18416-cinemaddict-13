import AbstractClass from '../classes/Abstract';
import {createHeading} from '../view/headingView';

export default class Heading extends AbstractClass {
  getTemplate() {
    return createHeading();
  }
}
