import template from './doodleAttributes.html';
import controller from './doodleAttributes.controller';
import './doodleAttributes.scss';

let doodleAttributesComponent = {
    template,
    bindings: {
        doodle: '<',
        attribute: '<',
        opponent: '<'
    }
};

export default doodleAttributesComponent;
