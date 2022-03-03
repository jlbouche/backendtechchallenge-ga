let express = require('express')
let router = express.Router();
let attendeeCtrl = require('../controllers/attendees')

router.get('/', attendeeCtrl.index);
router.get('/new', attendeeCtrl.new);
router.get('/:id', attendeeCtrl.show);
router.post('/', attendeeCtrl.create)

module.exports = router;