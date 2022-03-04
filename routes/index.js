let express = require('express');
let router = express.Router();
let attendeeCtrl = require('../controllers/attendees')

router.get('/', attendeeCtrl.index);
router.get('/new', attendeeCtrl.new);
router.get('/attendee/:id', attendeeCtrl.attendeeView);
router.get('/team/:id', attendeeCtrl.teamView);
router.get('/company/:id', attendeeCtrl.companyView)
router.post('/', attendeeCtrl.create);

module.exports = router;