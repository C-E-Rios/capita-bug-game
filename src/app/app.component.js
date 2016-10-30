import template from './app.html';
import controller from './app.controller';
import './app.scss';

let appComponent = {
    controller,
    template,
    restrict: 'E'
};

export default appComponent;
