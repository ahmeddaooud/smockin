
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "dashboard.html",
            controller : "dashboardController"
        })
        .when("/dashboard", {
            templateUrl : "dashboard.html",
            controller : "dashboardController"
        })
        .when("/tcp_endpoint", {
            templateUrl : "tcp_endpoint_info.html",
            controller : "tcpEndpointInfoController"
        })
        .when("/manage_users", {
            templateUrl : "manage_users.html",
            controller : "manageUsersController"
        });

});
