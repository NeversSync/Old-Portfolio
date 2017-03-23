'use strict';

(function(module) {
  const aboutController = {};

  // aboutController.showAbout = function() {
  //   $('.tab-content').hide();
  //   $('section#about').fadeIn(1000);
  // }

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  }

  module.aboutController = aboutController;
})(window);