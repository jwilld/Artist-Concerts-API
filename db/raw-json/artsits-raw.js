// Ticketmaster link setup 

// https://app.ticketmaster.com/{package}/{version}/{resource}.json?{classificationName}&apikey=**{API key}&{size}

const axios = require('axios');
const fs = require('fs')

//Make a request

axios.get("https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=Hip-Hop/Rap&apikey=nNYVKiR6NvxzGSf6qI2xZ7zdebBycfR6&size=10")
.then(response =>{
    fs.writeFile('artists2.json',(JSON.stringify(response.data._embedded.attractions)),(err) =>{
        if(err){
            console.log(err)
        }})
    })

