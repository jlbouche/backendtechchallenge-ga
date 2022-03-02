const fs = require('fs')
const express = require('express')
const path = require("path");
const req = require('express/lib/request');

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

app.get('/team/:id', (req, res) => {
    let id = req.params.id
    let teamArr = []
    attendees.forEach(elem => {
        if (elem.team == id){
            teamArr.push(elem.name)
        }
    })
    res.send(`${teamArr}`)
});

app.get('/company/:id', (req, res) => {
    let id = req.params.id
    let companyArr = []
    attendees.forEach(elem => {
        if (elem.Company == id){
            companyArr.push(elem.name)
        }
    })
    res.send(`${companyArr}`)
})