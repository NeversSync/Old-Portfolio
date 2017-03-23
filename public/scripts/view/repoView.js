'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');
    $about.find('#github').empty();
    // $about.show().siblings().hide();
  };

  function render(repo) {
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);
    return template(repo);
  }

  repoView.index = function() {
    ui();
    $('#github').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);