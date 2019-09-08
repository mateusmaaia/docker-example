const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

app = express();
port = process.env.PORT || 5051;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes(app);
app.listen(port);
console.log('Docker-Class REST API running on: ' + port);