import angular from 'angular';
import doodleAttributesComponent from './doodleAttributes.component';

let doodleAttributesModule = angular.module('doodleAttributes', [])

.component('doodleAttributes', doodleAttributesComponent)
.name;

export default doodleAttributesModule;
