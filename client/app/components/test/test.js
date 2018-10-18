import angular from 'angular';
import uiRouter from 'angular-ui-router';
import testComponent from './test.component';

let testModule = angular.module('test', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('test', {
        url: '/test',
        component: 'test'
      });
  })
  .component('test', testComponent)
  .name;

export default testModule;
