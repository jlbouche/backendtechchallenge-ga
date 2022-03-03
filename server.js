const express = require('express')
const path = require("path");
const req = require('express/lib/request');

const app = express();
const port = process.env.PORT || "3000"

require('./config/database')

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}!`);
})