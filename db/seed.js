const Ticketmaster = require('../models/Ticketmaster')
const artists = require('./raw-json/ticketmasterRaw.json')

Ticketmaster.deleteMany({}).then(Ticketmaster.create(artists))


