'use strict';

function Project (options) {
  this.category = options.category;
  this.title = options.title;
  this.projectUrl = options.projectUrl;
  this.madeOn = options.madeOn;
  this.body = options.body;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);

  return html;
};

Project.loadAll = function(rawData) {
  rawData.sort(function(currentObject, nextObject) {
    return (new Date(nextObject.madeOn)) - (new Date(currentObject.madeOn));
  });

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

Project.fetchAll = function() {
  if (localStorage.stored_projects) {
    var localStor = localStorage.getItem('stored_projects');
    Project.loadAll(localStor);
    projectView.initIndex();
  } else {
    $.ajax({
      url: 'data/blogProjects.json',
      method: 'GET',
      success: function(rawData) {
        localStorage.setItem('stored_projects', rawData);
        Project.loadAll(rawData);
        projectView.initIndex();
      }
    });
  }
};