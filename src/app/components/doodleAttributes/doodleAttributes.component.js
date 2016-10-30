import template from './doodleAttributes.html';
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
