// format for youtube links
// 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=QUERY&key=[YOUR_API_KEY]' 

const axios = require('axios')
const fs = require('fs')

// have to get each artist from ticketmaster json
let artistName = null
let query = `${artistName}%20concert`
// url to get videos
let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDeuyKWqo0zDyHhjXKY3VLQa0KcxXR-aAs`
axios.get(url).then(response => {
    console.log(JSON.stringify(response.data))
})