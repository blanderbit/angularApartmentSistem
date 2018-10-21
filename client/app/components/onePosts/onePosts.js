import angular from 'angular';
import uiRouter from 'angular-ui-router';
import onePostsComponent from './onePosts.component';

let onePostsModule = angular.module('onePosts', [
  uiRouter
])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('posts/id', {
                url: '/posts/:id',
                component: 'onePosts'
            });
    })
.component('onePosts', onePostsComponent)

.name;

export default onePostsModule;
