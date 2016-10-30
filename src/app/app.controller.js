class AppController {

    constructor ($http, AppService) {
        'ngInject';
        this.$http = $http;
        this.AppService = AppService;
    }

    $onInit () {
        this.getDoodles();
    }

    getDoodles () {
        return this.AppService.getDoodles()
            .then((data) => {
                this.doodles = data;
                return this.doodles;
            })
            .then((data) => {
                data.map((item) => {
                    return item.highestRating = Math.max(item.attributes.speed,
                        Math.max(item.attributes.strength,
                        item.attributes.intelligence)
                    );
                });
                return data;
            });
    }
}

export default AppController;
