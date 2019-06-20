const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const port = 3030;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Listening on port ${port}!`));
