import angular from 'angular';
import compareDoodlesComponent from './compareDoodles.component';

let compareDoodlesModule = angular.module('compareDoodles', [])

.component('compareDoodles', compareDoodlesComponent)
.name;

export default compareDoodlesModule;
