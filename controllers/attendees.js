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
    create,
    edit,
    delete: deleteAttendee
}

function index(req, res){
    let attendeesArr = []
    attendees.forEach(elem => {
        attendeesArr.push(elem.name)
    })
    res.send(`${attendeesArr}`)
}

function attendeeView(req, res){
    let id = req.params.id
    let attendeeArr = []
    attendees.forEach(elem => {
        if (elem.id == id){
            attendeeArr.push(elem.name)
        }
    })
    console.log(attendeeArr)
    if (attendeeArr.length > 0) {
        res.send(`${attendeeArr}`)
    } else {
        res.send(`Sorry, there is no attendee with id ${id}`)
    }
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
    if (companyArr.length > 0){
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
    console.log(`This is the new Attendee in create function: ${attendee}`)
    attendee.save(function(err){
        res.redirect(`/attendees/${attendee._id}`)
    })
}

function edit(req, res){
    Attendee.findOne({"attendees._id": req.params.id}, function (err, attendees){
        const attendeeDoc = attendees.id(req.params.id);
        attendeeDoc.content = req.body.content;
        attendees.save(function(err){
            res.redirect(`/${attendees._id}`)
        })
    })
}

function deleteAttendee(req, res){
    Attendee.findOne({'attendees._id': req.params.id}, function(err, attendees){
        const attendeeDoc = attendees.id(req.params.id);
        attendeeDoc.remove();
        attendees.save(function(err){
            res.redirect('/')
        })
    })
}