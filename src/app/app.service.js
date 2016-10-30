class AppService {

    constructor ($http) {
        'ngInject';
        this.$http = $http;
    }

    getDoodles() {
        return this.$http.get('services/doodles.json')
            .then(getDoodlesComplete)
            .catch(getDoodlesFailed);

        function getDoodlesComplete (response) {
            return response.data;
        }

        function getDoodlesFailed (error) {
            console.error('XHR Failed for getDoodles.' + error.data);
        }
    }

}

export default AppService;
