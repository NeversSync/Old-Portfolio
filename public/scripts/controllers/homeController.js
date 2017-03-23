'use strict';
  Project.fetchAll(projectView.initIndex);

(function(module) {
  const homeController = {};

  homeController.showAll = function() {
    $('.tab-content').hide();
    $('.tab-content').fadeIn(1000);
  }

  module.homeController = homeController;
})(window);