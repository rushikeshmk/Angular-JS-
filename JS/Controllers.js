
MyApp.controller('VendorCtrl', ['$scope','DashboardService', function ($scope, DashboardService) {
    $scope.message = "Vendor Page";
    $scope.CustData = DashboardService.GetData(0, 5);    
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
        var items = DashboardService.GetMoreItems(start_index, no_of_items);        
        for (var i = 0 ; i < items.length ; i++)
        {
            $scope.CustData.push(items[i]);
        }
    }

}]);

MyApp.controller("DashboardCtrl", ['$scope',function ($scope) {
    $scope.message = "Dashboard Page";
}])