import angular from 'angular';
import doodleListComponent from './doodleList.component';

let doodleListModule = angular.module('doodleList', [])

.component('doodleList', doodleListComponent)
.name;

export default doodleListModule;
