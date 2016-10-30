import angular from 'angular';
import DoodleList from './doodleList/doodleList';

let componentModule = angular.module('app.components', [
    DoodleList
])

.name;

export default componentModule;
