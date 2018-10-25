import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

let _$http = {
  post: function (url, viewValue,ngModel) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.mat.find(element => viewValue === element)) {
          resolve(true)
          ngModel.$error.text = true
        } else {
          reject(false)
          ngModel.$error.text = false
        }
      }, 1000);
    })
  }
}
let loginModule = angular.module('login', [
  uiRouter,
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('login', {
        url: '/login',
        component: 'login'
      });
  })




  .directive('validName',function($http,$q) {
    "ngInject";
    return {
      require: 'ngModel',
      link:function(scope, element, attrs, ngModel,$timeout) {
          console.log('dsfsd')
          "ngInject";
          ngModel.$asyncValidators.emails = function(modelValue, viewValue) {
              return _$http.post('/mat.json',viewValue, ngModel)

          }
      }
    }
  })
.component('login', loginComponent)

.name;

export default loginModule;
