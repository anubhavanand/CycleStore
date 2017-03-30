(function () {
    'use strict';

    angular
        .module('CycleStoreApp')
        .controller('HomeController', HomeController);

    function HomeController($scope, $timeout) {
        var self = this;
        this.images = [
            { src: 'image1.jpg', title: 'Pic 1', visible: true }, 
            { src: 'image2.jpg', title: 'Pic 2', visible: false }, 
            { src: 'image3.jpg', title: 'Pic 3', visible: false }, 
            { src: 'image4.jpg', title: 'Pic 4', visible: false },
            { src: 'image5.jpg', title: 'Pic 5', visible: false },
            { src: 'image6.jpg', title: 'Pic 6', visible: false }
        ];

        this.currentIndex = 0;
        this.timer;
        self.next = next;
        self.prev = prev;

        (function SliderFunc() {
            self.timer = $timeout(function () {
                self.next();
                self.timer = $timeout(SliderFunc, 3000);
            }, 3000);
        })();


        $scope.$on('$destroy', function () {
            $timeout.cancel(self.timer);
        });

        function next () {
            self.currentIndex < self.images.length - 1 ? self.currentIndex++ : self.currentIndex = 0;
            changeVisibleImage();
        };

        function prev () {
            self.currentIndex > 0 ? self.currentIndex-- : self.currentIndex = self.images.length - 1;
            changeVisibleImage();
        };

        function changeVisibleImage() {
            self.images.forEach(function (image) {
                image.visible = false;
            });
            self.images[self.currentIndex].visible = true;
        };
    }

})();

