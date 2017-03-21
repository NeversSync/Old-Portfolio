'use strict';
(function(module) {
  const projectController = {};

  projectController.showProjects = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn(1000);
  }

  module.projectController = projectController;
})(window);