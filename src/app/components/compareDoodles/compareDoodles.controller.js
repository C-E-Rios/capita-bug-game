class CompareDoodlesController {

    constructor () {
    }

    $onChanges () {

        if (this.newDoodle && this.newDoodle.selected) {
            this.updateDoodles(this.newDoodle);
        }

    }

    updateDoodles (newDoodle) {

        // Assign first selection to doodleA
        if (!this.doodleA) {
            return this.doodleA = newDoodle;
        }

        // Assign second selection to doodleA
        if (!this.doodleB) {
            return this.doodleB = newDoodle;
        }

        let container = [];
        container.push(this.doodleA, this.doodleB, newDoodle);
        container =  _.uniq(container);
        container = _.filter(container, (item) => item.selected);

        this.doodleA = container[0];
        this.doodleB = container[1];

    }

}

export default CompareDoodlesController;
