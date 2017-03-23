'use strict';

(function(module) {
const repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
  $.ajax('https://api.github.com/users/neverssync/repos', {
    method: 'GET',
  }) 
  .then((result) => {
    result.filter(r => !r.fork)
    .map(function(ele) {
      repos.all.push(ele)
    })
    callback();
   })
  .catch((err) => {console.error});
}

repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);