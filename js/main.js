import angular from 'angular';


//controllers
import LikeController from './controllers/like';

//creating the model
angular.module('really', [])

// some controllers
.controller('LikeController', LikeController);