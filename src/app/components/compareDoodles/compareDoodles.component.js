import template from './compareDoodles.html';
import controller from './compareDoodles.controller';
import './compareDoodles.scss';

let compareDoodlesComponent = {
    template,
    bindings: {
        newDoodle: '<'
    },
    controller
};

export default compareDoodlesComponent;
