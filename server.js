const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
require('./backend/routes')(app);


app.listen(8000, function() {
    console.log("listening on port 8000");
})
