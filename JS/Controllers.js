
MyApp.controller('VendorCtrl', ['$scope','DashboardService', function ($scope, DashboardService) {
    $scope.message = "Vendor Page";
    $scope.CustData = DashboardService.GetData(0, 5);
    console.log($scope.CustData);
    $scope.edit = false;
    $scope.limit = 5;
   

    $scope.AddData = function () {
        var data = { Name: $scope.EnteredName, Age: $scope.EnteredAge };
        DashboardService.PostData(data);
        $scope.EnteredName = '';
        $scope.EnteredAge = '';
        $scope.CustData = DashboardService.GetData();
    };

    $scope.RemoveItem = function (index) {
        console.log(index);
        DashboardService.RemoveItem(index);
    };
    $scope.UpdateCust = function (index, Data) {
        DashboardService.UpdateItem(index, Data);
        $scope.CustData = DashboardService.GetData();
    };

    $scope.ShowMoreItems = function (start_index, no_of_items)
    {        
        //$scope.limit += no_of_items;

        $scope.CustData += DashboardService.GetMoreItems(start_index, no_of_items);
        console.log("CustData");
        console.log($scope.CustData);
    }

}]);

MyApp.controller("DashboardCtrl", ['$scope',function ($scope) {
    $scope.message = "Dashboard Page";
}])