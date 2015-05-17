var MyApp = angular.module("MyApp", ['ngRoute']);

MyApp.config(function ($routeProvider) {
    $routeProvider
        .when('/Dashboard', {
            templateUrl: 'Views/Dashboard.html',
            controller: 'DashboardCtrl'
        })
    .when('/Vendor', {
        templateUrl: 'Views/Vendor.html',
        controller: 'VendorCtrl'
    })
    .when('/', {
        templateUrl: 'Views/Dashboard.html',
        controller: 'DashboardCtrl'
    })

});

MyApp.factory('DashboardService', ['$http', function ($http) {
    var Data = [{ Name: "Sachin Tendulkar", Age: 42 },
        { Name: "Saurav Ganguly", Age: 43 },
        { Name: "Rahul Dravid", Age: 42 },
        { Name: "V.V.S. Laxman", Age: 40 },
        { Name: "Virendra Sehwag", Age: 35 },
        { Name: "Gautam Gambhir", Age: 32 },
        { Name: "M.S.Dhoni", Age: 32 },
        { Name: "Harbhajan Singh", Age: 35 },
        { Name: "Zaheer Khan", Age: 36 },
        { Name: "Yuvraj Singh", Age: 32 },
        { Name: "Anil Kumble", Age: 43 },
    ];
    var DashboardFactory = {};
    DashboardFactory.GetData = function () {
        return Data;
    };

    DashboardFactory.GetData = function (start_index, limit) {
        var items = Data.slice(start_index, limit);;
        return items;
    };


    DashboardFactory.PostData = function (data) {
        Data.push(data);
    };

    DashboardFactory.RemoveItem = function (index) {
        Data.splice(index, 1);
    };

    DashboardFactory.UpdateItem = function (index, UpdateData) {
        Data[index] = UpdateData;
    };

    DashboardFactory.GetMoreItems = function (start_index, no_of_items) {
        var items;
        var arrayLength = Data.length;
        if (arrayLength < (start_index + no_of_items))
        {
            console.log(start_index +" :"+ no_of_items);
            var remaining_items = (start_index + no_of_items) - arrayLength;
            console.log("Remaining Items" + remaining_items);
            items = Data.slice(start_index,start_index + remaining_items);
            console.log("Items");
            console.log(items);
        }
        else
        {
            items = Data.slice(start_index, start_index + no_of_items);
        }
        return items;
    }

    return DashboardFactory;
}])