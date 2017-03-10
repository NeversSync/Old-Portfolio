'use strict';

blogView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    var $clickedTab = $(this).attr('data-content');
    $('#' + $clickedTab).fadeIn(1000); 
  });
  // $('.main-nav .tab:first').click();
};

$(document).ready(function() {
  blogView.handleMainNav();
});