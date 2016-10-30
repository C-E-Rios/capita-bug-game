class CompareDoodlesController {

    constructor () {
    }

    $onChanges () {

        if (this.newDoodle && this.newDoodle.selected) {
            this.compareSelectedDoodles(this.newDoodle);
        }

    }

    compareSelectedDoodles (newDoodle) {

        // Assign first selection to doodleA
        if (!this.doodleA) {
            return this.doodleA = newDoodle;
        }

        // Assign second selection to doodleA
        if (!this.doodleB) {
            return this.doodleB = newDoodle;
        }

        // Correct pointer for doodleA already set, no need to do anything
        if (this.doodleA.selected && this.doodleA.name === newDoodle.name) {
            return newDoodle;
        }

        // Correct pointer for doodleB already set, no need to do anything
        if (this.doodleB.selected && this.doodleB.name === newDoodle.name) {
            return newDoodle;
        }

        if (!this.doodleA.selected) {
            return this.doodleA = newDoodle;
        }

        if (!this.doodleB.selected) {
            return this.doodleB = newDoodle;
        }

    }

}

export default CompareDoodlesController;
