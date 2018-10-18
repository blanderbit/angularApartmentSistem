import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import footer from "./footer/footer";
import ResultService from "../services/resultServices";
import test from "../components/test/test";


let commonModule;
commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  footer,
  test
])
  .service('asdf', ResultService)
  .name;

export default commonModule;
