angular.module('app')
    .controller('PostsCtrl', function ($scope, PostSvc) {
        $scope.addPost = function () {
            if ($scope.postBody) {
                PostSvc.create({
                    username: 'abhigyan',
                    body: $scope.postBody
                }).success(function (post) {
                    $scope.posts.unshift(post)
                    $scope.postBody = null
                })
            }
        }

        PostSvc.fetch().success(function (posts) {
            $scope.posts = posts
        })
    })