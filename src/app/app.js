import angular from 'angular';
import AppComponent from './app.component.js';
import './app.scss';

import mainJs from './js/main';

angular.module('doodleBugApp', [])

    .config(($locationProvider) => {
        'ngInject';
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .component('app', AppComponent);
