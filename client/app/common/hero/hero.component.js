import template from './hero.html';
import controller from './hero.controller';
import './hero.css';

let heroComponent = {
  controllerAs:'vm',
  bindings: {},
  template,
  controller
};

export default heroComponent;
