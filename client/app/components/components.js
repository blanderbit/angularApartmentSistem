import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Login from './login/login'
import registration from './registration/registration'

let componentModule = angular.module('app.components', [
  Home,
  About,
  Login,
  registration
])

.name;

export default componentModule;
