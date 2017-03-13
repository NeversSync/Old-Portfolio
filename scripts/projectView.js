'use strict';

var blogView = {};

blogView.populateFilters = function() {
  $('article[data-category]').each(function() {
      var val = $(this).attr('data-category');
      var optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
  })
};

blogView.handleCategoryFilter = function() {
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

blogView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    if($(this).attr('data-content')) {
    $('.tab-content').hide();
    var clickedTab = $(this).attr('data-content');
    $('#' + clickedTab).fadeIn(1000); 
    } else {
     $('.tab-content').fadeIn(1000);
    }
  });
  $('.main-nav .tab:first').click();
};

blogView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any article body.

  $('#articles').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

$(document).ready(function() {
  blogView.populateFilters();
  blogView.handleCategoryFilter();
  blogView.handleMainNav();
  blogView.setTeasers();
});