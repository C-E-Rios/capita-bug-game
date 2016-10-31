import _ from 'lodash';

import angular from 'angular';
import Components from './components/components';

import AppService from './app.service';
import AppComponent from './app.component.js';

import './app.scss';

angular.module('doodleBugApp', [
        Components
    ])

    .config(($locationProvider) => {
        'ngInject';
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .service('AppService', AppService)
    .component('app', AppComponent);
