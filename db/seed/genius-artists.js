
const axios = require('axios')
const fs = require('fs')
const apiKey = 'access_token=wrZTuUflK9Y3AfE2QoH5HkrVb_L9PWsCNrvEdZSZDudOC0wYBMipetEr4ewb4ReO'
let artistList = []


for(let i = 1; i <= 1500; i++){
    let url = `https://api.genius.com/artists/${i}/?${apiKey}`
    axios.get(url).then(response => {
        artistList.push(response.data.response.artist)
    })
    .then(()=> fs.writeFile('all-genius-artists.json',JSON.stringify(artistList),(err) => {
        if(err){
            console.log(err)
        }
    })).catch(e => console.log(e))
}