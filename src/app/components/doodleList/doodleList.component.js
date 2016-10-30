import template from './doodleList.html';
import controller from './doodleList.controller';
import './doodleList.scss';

let doodleListComponent = {
    template,
    bindings: {
        newDoodle: '&',
        doodles: '<'
    },
    controller
};

export default doodleListComponent;
