class DoodleListContoller {

    constructor () {
        this.doodlesSelected = 0;
        this.limit = 2;
    }

    $onInit () {
        console.log(this);
        console.log('hello');
    }

    sortDoodles (prop) {
        this.reverse = (this.orderBy === prop) ? !this.reverse : false;
        this.orderBy = prop;

        // Needed for classes on sort toggles
        this.reverse ? this['sort' + prop] = 'down' : this['sort' + prop] = 'up';
        prop === 'name' ? this.sortteam = null : this.sortname = null;
    }

    manageDoodles (selectedDoodle) {
        // newDoodle event
        this.newDoodle({$event: {newDoodle: selectedDoodle}})
        selectedDoodle.selected ? this.doodlesSelected++ : this.doodlesSelected--;
    }

}

export default DoodleListContoller;
