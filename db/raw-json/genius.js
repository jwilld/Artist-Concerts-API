
const mongoose = require('../connection')
const Artist = require('../../models/Artists')

Artist.find({}).then(artists => artists.forEach(artist => {
    let query = `${artist.name}`
    let url = `https://api.genius.com/search?q=${query}&access_token=${apiKey}`
    axios.get(url).then(response => {
        hitsList.push(response.data.response.hits)
    })
    .then(()=> console.log('*****************************',hitsList))
    .then(()=> fs.writeFile('genius-artist-hits.json',JSON.stringify(hitsList),(err) =>{
        if(err){
            console.log(err)
        }
    }))
}))





