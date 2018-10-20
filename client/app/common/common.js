import angular from 'angular';
import User from './user/user';
import footer from "./footer/footer";
import toolbar from "./toolbar/toolbar";
import ResultService from "../services/resultServices";

let commonModule;
commonModule = angular.module('app.common', [
  User,
  footer,
  toolbar,
])
  .service('asdf', ResultService)
  .name;

export default commonModule;
