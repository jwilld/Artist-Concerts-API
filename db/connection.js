const mongoose= require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/artist-concerts-api', { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
	mongoURI = process.env.DB_URL;
  } else {
	mongoURI = "mongodb://localhost/artist-concerts-api";
  }


module.exports = mongoose