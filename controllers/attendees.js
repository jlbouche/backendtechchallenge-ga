const Attendee = require('../models/attendee');

module.exports = {
    index,
    show,
    new: newAttendee,
    create
}

function index(req, res){
    Attendee.find({}, function(err, attendees){
        res.render('attendees/index', {title: 'All Attendees', attendees})
    })
}

function create(req, res){
    const attendee = new Attendee(req.body);
    attendee.save(function(err){
        res.redirect(`/attendees/${attendee._id}`)
    })
}