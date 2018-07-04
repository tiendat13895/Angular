const express = require('express');
const path = require('path');
var jsonServer = require('json-server');

const app = express();
app.use('/api', jsonServer.router('db.json'));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});
// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});