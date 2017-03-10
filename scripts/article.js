var projects = [];
var blogProjects;
var blogView = {};

function Project (options) {
  this.category = options.category;
  this.title = options.title;
  this.projectUrl = options.projectUrl;
  this.madeOn = options.madeOn;
  this.body = options.body;
}

Project.prototype.toHtml = function() {
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  
  return html;
};

blogProjects.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.madeOn)) - (new Date(currentObject.madeOn));
});

blogProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(project) {
  $('#articles').append(project.toHtml());
});
