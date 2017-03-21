'use strict';

(function(module) {
  const projectView = {};

  projectView.populateFilters = function() {
    $('article[data-category]').each(function() {
        var val = $(this).attr('data-category');
        var optionTag = `<option value="${val}">${val}</option>`;
        if ($(`#category-filter option[value="${val}"]`).length === 0) {
          $('#category-filter').append(optionTag);
        } 
    })
  };

  projectView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $(`article[data-category="${$(this).val()}"]`).fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
    });
  };

  // projectView.handleMainNav = function() {
  //   $('.main-nav').on('click', '.tab', function() {
  //     if($(this).attr('data-content')) {
  //     $('.tab-content').hide();
  //     var clickedTab = $(this).attr('data-content');
  //     $('#' + clickedTab).fadeIn(1000); 
  //     } else {
  //      $('.tab-content').fadeIn(1000);
  //     }
  //   });
  //   $('.main-nav .tab:first').click();
  // };

  projectView.setTeasers = function() {
    $('.article-body *:nth-of-type(n+2)').hide(); // this hides elements beyond the first 2 in article body.

    $('#articles').on('click', 'a.read-on', function(e) {
      e.preventDefault();
      $(this).parent().find('*').fadeIn();
      $(this).hide();
    });
  };

  projectView.initIndex = function() {
      Project.all.forEach(function(project) {
      $('#articles').append(project.toHtml());
    });
    projectView.populateFilters();
    projectView.handleCategoryFilter();
    // projectView.handleMainNav();
    projectView.setTeasers();
  };

  module.projectView = projectView;
})(window);