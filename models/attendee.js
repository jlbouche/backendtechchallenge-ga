const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
    id: Number,
    name: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    country: String,
    postalZip: Number,
    email: String,
    Company: String,
    companyFunded: Number,
    userID: String,
    team: Number,
    paid: Boolean,
    date: Date,
    title: String
})

module.exports = mongoose.model('Attendee', attendeeSchema)