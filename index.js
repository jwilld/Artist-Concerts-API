
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





// app.listen(8080, () => console.log("They see me rollin...on port 8080..."));
// app.set("port", process.env.PORT || 8080);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });

app.listen(3003,()=> console.log('port 3003'))