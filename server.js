const express = require('express')
const path = require("path");
const req = require('express/lib/request');

const attendeeRoute = require('./routes/index')

const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});

const app = express();
const port = process.env.PORT || "3000"

require('./config/database')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}!`);
})

app.use('/', attendeeRoute)

app.use(function(req, res) {
    res.status(404).send("Can't find that!");
});

module.exports = app;