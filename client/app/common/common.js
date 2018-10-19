import angular from 'angular';
import Hero from './hero/hero';
import User from './user/user';
import footer from "./footer/footer";
import toolbar from "./toolbar/toolbar";
import ResultService from "../services/resultServices";

let commonModule;
commonModule = angular.module('app.common', [
  Hero,
  User,
  footer,
  toolbar,
])
  .service('asdf', ResultService)
  .name;

export default commonModule;
