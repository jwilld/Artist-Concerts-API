
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




app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});