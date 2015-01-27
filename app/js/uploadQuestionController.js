
starter.controller('uploadQuestionController', ['$scope', '$state', '$stateParams', 'FileUploader', '$cordovaDialogs','appService',   function($scope, $state, $stateParams, FileUploader, $cordovaDialogs, appService) {

        var url = 'marketplace/dpp/uploadDpp';
         $scope.appService.app.showTabs = '';
        
        if($state.current.name === "tab.uploadSolution"){
          url = 'marketplace/dppSolution/uploadDppSolution';
        } 
        $scope.appService.app.title = 'Home';
        var uploader = $scope.uploader = new FileUploader({
                 'url': url
              });
        // FILTERS
        uploader.data = {'name':'','subject':'Math', 'concept': 'trigonometry', dppId : $stateParams.dppId};

        if($state.current.name === "tab.uploadSolution"){
          var dppId=$stateParams.dppId;
          uploader.data.dppId = dppId;
        }  
        
        uploader.filters.push({
                name: 'customFilter',
                fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
                }
        });
      

        $scope.uploader.onBeforeUploadItem = function onBeforeUploadItem(item) {
             // alert('coming here ' + item);
              item.formData.push({your: 'data'});
              console.log(item);
        }

      

        // CALLBACKS
        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
          console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
          console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
          console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {


          // $cordovaDialogs.confirm('Are you sure to upload from upload', 'upload', ['Ok','Cancel']).then(function(buttonIndex) {
          //     // no button = 0, 'OK' = 1, 'Cancel' = 2
          //      var btnIndex = buttonIndex;
          //      alert('button index is ' + btnIndex);
          // });
          item.formData.push({'name' : uploader.data.name});
          item.formData.push({'subject' :  uploader.data.subject});
          item.formData.push({'concept' : uploader.data.concept});
          item.formData.push({'dppId' : uploader.data.dppId});
          console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
          console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
          console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
          console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
          console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
          console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
          console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
          console.info('onCompleteAll');
        };

	
}]);
