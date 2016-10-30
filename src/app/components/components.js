import angular from 'angular';
import DoodleList from './doodleList/doodleList';
import CompareDoodles from './compareDoodles/compareDoodles';
import DoodleAttributes from './doodleAttributes/doodleAttributes';

let componentModule = angular.module('app.components', [
    DoodleList,
    CompareDoodles,
    DoodleAttributes
])

.name;

export default componentModule;
