import angular from 'angular';
import Home from './home/home';
import Login from './login/login'
import registration from './registration/registration'
import onePosts from './onePosts/onePosts'

let componentModule = angular.module('app.components', [
  Home,
  Login,
  registration,
    onePosts
])

.name;

export default componentModule;
