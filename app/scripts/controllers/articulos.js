'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts = [
{
title:"Alimentos buenos para la salud",
content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue."
},
{
title:"Alimentos menos buenos para la salud",
content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in."
},
{
title:"¡¡¡Limita tu cantidad de hidratos de carbono",
content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue."
      }

       ];
  });