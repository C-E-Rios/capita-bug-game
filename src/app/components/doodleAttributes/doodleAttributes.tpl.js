let compareDoodlesTemplate = function ($element, $attrs) {
    'ngInject';

    console.log($attrs);

    let tpl = `<span class="green" ng-class="{'red': ${$attrs.opponent}.selected && $ctrl.doodle.attributes[${$attrs.attribute}] < ${$attrs.opponent}.attributes[${$attrs.attribute}]}">{{${$attrs.doodle}.attributes[${$attrs.attribute}]}}</span>`;

    console.log(tpl);

    return tpl;
}

export default compareDoodlesTemplate;
