// format for youtube links
// 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=QUERY&key=[YOUR_API_KEY]' 

const axios = require('axios')
const fs = require('fs')
const Artist = require('../../models/Artists')
// have to get each artist from Artist database


Artist.find({}).then(artists => artists.forEach(artist =>{
    let query = `${artist.name}%20concert`
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDeuyKWqo0zDyHhjXKY3VLQa0KcxXR-aAs`
    axios.get(url).then(response => {
        console.log(`${artist.name}:`,JSON.stringify(response.data))
    })
}))


// let query = `${artistName}%20concert`
// // url to get videos
// axios.get(url).then(response => {
//     console.log(JSON.stringify(response.data))
// })