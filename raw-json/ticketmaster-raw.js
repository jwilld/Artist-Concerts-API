// Ticketmaster link setup 

// https://app.ticketmaster.com/{package}/{version}/{resource}.json?{classificationName}&apikey=**{API key}&{size}

const axios = require('axios');
const fs = require('fs')

//Make a request

axios.get("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Hip-Hop/Rap&apikey=nNYVKiR6NvxzGSf6qI2xZ7zdebBycfR6&size=10")
.then(response =>{
    fs.writeFile('ticketmasterRaw.json',(JSON.stringify(response.data)),(err) =>{
        if(err){
            console.log(err)
        }})
    })

