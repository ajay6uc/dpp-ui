
starter.controller('uploadQuestionController', ['$scope', 'FileUploader', function($scope, FileUploader) {
var uploader = $scope.uploader = new FileUploader({
                 url: '/marketplace/user/uploaddp'
              });
        // FILTERS
        uploader.filters.push({
                name: 'customFilter',
                fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
                }
        });
        uploader.data = {'name':'','subject':'Math', 'concept': 'trigonometry' };

        $scope.uploader.onBeforeUploadItem = function onBeforeUploadItem(item) {
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
          item.formData.push({'name' : uploader.data.name});
          item.formData.push({'subject' :  uploader.data.subject});
          item.formData.push({'concept' : uploader.data.concept});
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
