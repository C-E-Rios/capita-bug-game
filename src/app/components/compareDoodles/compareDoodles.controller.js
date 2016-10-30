class CompareDoodlesController {

    constructor () {
    }

    $onChanges () {

        if (this.newDoodle && this.newDoodle.selected) {
            this.compareSelectedDoodles(this.newDoodle);
        }

    }

    compareSelectedDoodles (newDoodle) {

        if (!this.doodleA || (this.doodleB && this.doodleB.selected)) {
            return this.doodleA = newDoodle;
        }

        if (!this.doodleB || (this.doodleA && this.doodleA.selected)) {
            return this.doodleB = newDoodle;
        }
    }

}

export default CompareDoodlesController;
