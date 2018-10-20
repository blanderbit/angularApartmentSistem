import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import aria from 'angular-aria';


angular.module('app', [
    uiRouter,
    Common,
    Components,
      ngMaterial,
      ngMessages
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)

