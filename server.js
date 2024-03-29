var express = require('express'),
port = process.env.PORT || 3000,
app = express();

console.log ('logging env/port', process.env);
function proxyGitHub(request, response) {
  console.log('Routing Github request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers:{
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(request, response);
};
app.use(express.static('./public'));

app.get('*', function(request, response) {
  response.sendFile('/public/index.html', {root: '.'})
})

app.listen(port, function() {
  console.log(`server is up on ${port}`)
})