// format
// 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=QUERY&key=[YOUR_API_KEY]' 
const axios = require('axios')
const fs = require('fs')

let artistName = 'Jayz'
let query = `${artistName}%20concert`

url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDeuyKWqo0zDyHhjXKY3VLQa0KcxXR-aAs`
