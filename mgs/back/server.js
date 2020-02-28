const express = require('express');
const api = require('./routes');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.use('/api', api);

app.listen(port, (err) => {
    if(err) {
        throw new Error("It Isn't gonna work...");
    }
    console.log(`Server is listening on ${port}`);
});