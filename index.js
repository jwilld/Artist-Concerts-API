
const express = require('express')
const parser = require("body-parser")
const app = express()

const artistsController = require('./controllers/artists')
const youtubeController = require('./controllers/youtube')
const hitsController = require('./controllers/hits')


app.use(parser.json())

app.use('/',artistsController)
app.use('/',youtubeController)
app.use('/',hitsController)





app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(3003,()=> console.log('port 3003'))