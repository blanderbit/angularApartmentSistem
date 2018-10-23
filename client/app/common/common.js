import angular from 'angular';
import User from './user/user';
import footer from "./footer/footer";
import toolbar from "./toolbar/toolbar";
import hero from "./hero/hero";
import formModal from "./formModal/formModal"
import data from "../services/resultServices";

let commonModule;
commonModule = angular.module('app.common', [
  User,
  footer,
  toolbar,
  hero,
  formModal
])
  .service('dataService', data)
  .name;

export default commonModule;
