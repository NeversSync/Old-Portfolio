var projects = [];
var blogProjects;

function Project (options) {
  this.category = options.category;
  this.title = options.title;
  this.projectUrl = options.projectUrl;
  this.madeOn = options.madeOn;
  this.body = options.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.attr('data-category', this.category);
  $newProject.find('h1').text(this.title);
  $newProject.find('a').attr('href', this.projectUrl);
  $newProject.find('.project-description').html(this.body);
  $newProject.find('time[pubdate]').attr('title', this.madeOn);
  $newProject.find('time').text('about ' + parseInt((new Date() - new Date(this.madeOn))/60/60/24/1000) + ' days ago');
  $newProject.removeClass('template');
  $newProject.find('article.template').remove();
  return $newProject;
}

blogProjects.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.madeOn)) - (new Date(currentObject.madeOn));
});

blogProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(project) {
  $('#articles').append(project.toHtml());
});
