(function () {
    var cycleStoreApp = angular.module("CycleStoreApp");
    function sliderImage() {
        this.images = [{ src: 'image1.jpg', title: 'Pic 1' }, { src: 'image2.jpg', title: 'Pic 2' }, { src: 'image3.jpg', title: 'Pic 3' }];
    }
    
    cycleStoreApp.directive('slider', function ($timeout) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                images: '='
            },
            link: function (scope, elem, attrs) {

                scope.currentIndex = 0;

                scope.next = function () {
                    scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
                };

                scope.prev = function () {
                    scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
                };

                scope.$watch('currentIndex', function () {
                    scope.images.forEach(function (image) {
                        image.visible = false;
                    });
                    scope.images[scope.currentIndex].visible = true;
                });

                /* Start: For Automatic slideshow*/

                var timer;

                var sliderFunc = function () {
                    timer = $timeout(function () {
                        scope.next();
                        timer = $timeout(sliderFunc, 3000);
                    }, 3000);
                };

                sliderFunc();

                scope.$on('$destroy', function () {
                    $timeout.cancel(timer);
                });

                /* End : For Automatic slideshow*/

            },
            templateUrl: 'templates/templateurl.html'
        }
    });
    cycleStoreApp.service("SliderImageSvc", sliderImage);
})();

