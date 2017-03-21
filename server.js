const express = require('express');
const page = require('page');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('*', function(request, response) {
  response.sendFile('/public/index.html', {root: '.'})
})

app.listen(PORT, function() {
  console.log(`server is up on ${PORT}`)
})