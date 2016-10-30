import template from './doodleList.html';
import controller from './doodleList.controller';
import './doodleList.scss';

let doodleListComponent = {
    restrict: 'E',
    template,
    bindings: {
        doodles: '<'
    },
    controller
};

export default doodleListComponent;
