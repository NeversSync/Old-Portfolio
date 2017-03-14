const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./portfolio'));

app.get('*', function(request, response) {
  response.sendFile('/index.html', {root: '.'})
})
app.get('*', function(request, response) {
  response.sendFile('/styles/base.css', {root: '.'});
})

app.listen(PORT, function() {
  console.log(`server is up on ${PORT}`)
})