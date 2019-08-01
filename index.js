
const express = require('express')
const parser = require("body-parser")
const app = express()

const artistsController = require('./controllers/artists')


app.use(parser.json())

app.use('/', artistsController)


// app.get("/:name/", function(req,res){
//     res.send(`Hello bruh`)
// })

app.listen(4000, () => console.log('im running on 4000'))