import Artist from '../../models/Artists';
import artists from './artists.json';

// const youtube = require('./youtube.json')


Artist.deleteMany({}).then(Artist.create(artists))





