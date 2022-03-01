const fs = require('fs')
const express = require('express')
const path = require("path")

const app = express();
const port = process.env.PORT || "3000"

const data = fs.readFileSync('attendees.json')

const attendees = JSON.parse(data)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}!`);
})

function allAttendees(req, res){
    let attendeesArr = []
    attendees.forEach(elem => {
        attendeesArr.push(elem.name)
    })
    res.send(`${attendeesArr}`)
}

app.get("/", (allAttendees))