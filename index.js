
const express = require('express')
const parser = require("body-parser")
const app = express()

const artistsController = require('./controllers/artists')
const genresController = require('./controllers/genre')
const youtubeController = require('./controllers/youtube')


app.use(parser.json())

app.use('/', artistsController)
app.use('/', genresController)
app.use('/',youtubeController)




app.listen(4000, () => console.log('im running on 4000'))