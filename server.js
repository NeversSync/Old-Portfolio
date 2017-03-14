const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('*', function(request, response) {
  response.sendFile('/public/index.html', {root: '.'})
})
//   response.sendFile('/styles/base.css', {root: '.'});
// app.get('*', function(request, response) {
// })
// app.get('*', function(request, response) {
//   response.sendFile('/styles/modules.css', {root: '.'});
// })
// app.get('*', function(request, response) {
//   response.sendFile('/styles/layout.css', {root: '.'});
// })

app.listen(PORT, function() {
  console.log(`server is up on ${PORT}`)
})