'use strict';

(function(module) {
  const aboutController = {};

  aboutController.showAbout - function() {
    $('.tab-content').hide();
    // $('section #about').fadeIn(1000);
  }

  module.aboutController = aboutController;
})(window);