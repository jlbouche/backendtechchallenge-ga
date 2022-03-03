const fs = require('fs')
const data = fs.readFileSync('attendees.json')
const attendees = JSON.parse(data)
const Attendee = require('../models/attendee');

module.exports = {
    index,
    attendeeView,
    teamView,
    companyView,
    new: newAttendee,
    create
}

function index(req, res){
    let attendeesArr = []
    attendees.forEach(elem => {
        attendeesArr.push(elem.name)
    })
    res.send(`${attendeesArr}`)
}

function attendeeView(req, res){
    Attendee.findById(req.params.id, function(err, attendee){

    })
}

function teamView(req, res){
    let id = req.params.id
    let teamArr = []
    attendees.forEach(elem => {
        if (elem.team == id){
            teamArr.push(elem.name)
        }
    })
    if (teamArr.length > 0) {
        res.send(`${teamArr}`)
    } else {
        res.send(`Sorry, there is no team ${id}`)
    }
}

function companyView(req, res){
    let id = req.params.id
    let companyArr = []
    attendees.forEach(elem => {
        if (elem.Company == id){
            companyArr.push(elem.name)
        }
    })
    if (companyArr.length >0){
        res.send(`${companyArr}`)
    } else {
        res.send(`Sorry, we have no attendees from ${id}`)
    }
}

function newAttendee(req, res){
    res.render('/attendees/new', {title: 'Add Attendee'})
}

function create(req, res){
    const attendee = new Attendee(req.body);
    attendee.save(function(err){
        res.redirect(`/attendees/${attendee._id}`)
    })
}