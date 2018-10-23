import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formModalComponent from './formModal.component';

let formModalModule = angular.module('formModal', [
  uiRouter
])

.component('modal', formModalComponent)

.name;

export default formModalModule;
