const axios = require('axios')
const fs = require('fs')
const Artist = require('../../models/Artists')
const apiKey = 'access_token=wrZTuUflK9Y3AfE2QoH5HkrVb_L9PWsCNrvEdZSZDudOC0wYBMipetEr4ewb4ReO'
let hitsList = []



Artist.find({}).then(artists => artists.forEach(artist => {
    let query = `${artist.name}`
    let url = `https://api.genius.com/search?q=${query}&${apiKey}`
    axios.get(url).then(response => {
        hitsList.push(response.data.response.hits)
    })
    .then(()=> console.log('*****************************',hitsList))
    .then(()=> fs.writeFile('genius-artists-hits.json',JSON.stringify(hitsList),(err) =>{
        if(err){
            console.log(err)
        }
    })).finally(()=> console.log(`${artist.name} hits added to json`))
    .catch(e => console.log(e))
}))






