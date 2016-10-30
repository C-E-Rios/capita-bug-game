import template from './doodleAttributes.html';
import controller from './doodleAttributes.controller';
import './doodleAttributes.scss';

let doodleAttributesComponent = {
    template,
    bindings: {
        doodle: '<',
        attribute: '<',
        opponent: '<'
    },
    require: {
        compareDoodles: '^^'
    },
    controller
};

export default doodleAttributesComponent;
