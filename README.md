# Artist Concerts API

# Description
This API shows concert information for an artist from Ticketmaster. The information about the artist includes their concert videos from youtube and hits. Ultimately this would eliminate the need to 
navigate between Ticketmaster and Youtube to see how an artist's concert is.

# Local Setup

This API was built using express and node. To start this api locally, first change the port on the index.js
file to the localhost. Then run mongod in the terminal. Once thats started, run the seed file located in this pathway
without the quoatations: 'db/seed/seed.js'. After seeding type in 'node' or preferrably 'nodemon index.js'.
To see the responses depicted in this readme, use Postman or a browser to connect to the localhost. Follow the instructions for
each of the endpoints.



# APIs used and why
###  Artists
 ###### Genius - https://docs.genius.com/
 Artists and their hits songs are drawn from Genius.

### Concert Videos
 ###### Youtube - https://developers.google.com/youtube/v3/getting-started
 The videos for each artist are from Youtube. 

 # Technologies
 - Created with Express, Mongoose and Node.js
 - Deployed with Heroku
 - Hosted with Mongo Atlas
 - Tested on Postman

# Dependencies
- express
- mongoose 
- nodemon 

# Examples of Responses

### Artists
    {
        "_id": "5d4408c421d96a18fa76f5e4",
        "name": "Shoreline Mafia",
        "__v": 0
    },
    {
        "_id": "5d4408c421d96a18fa76f5e5",
        "name": "Chance the Rapper",
        "__v": 0
    }
### Youtube Links
    {
        "_id": "5d43f087503fc361db695734",
        "link": "https://www.youtube.com/watch?v=i0zW7qrKwtw",
        "name": "Kevin Gates",
        "__v": 0
    },
    {
        "_id": "5d43f087503fc361db69573c",
        "link": "https://www.youtube.com/watch?v=i99rVXaFHeA",
        "name": "Rich Brian",
        "__v": 0
    }
### Hits
    {
      "primary_artist": {
        "name": "The Notorious B.I.G."
      },
      "_id": "5d6d54c799d4ff0004e250ac",
      "full_title": "Big Poppa by The Notorious B.I.G.",
      "title": "Big Poppa",
      "__v": 0
    }




# Paths

### Artists

##### Get '/artists' or '/'
- Returns a list of all artists.

##### Get '/artists/<<artist name>>' 
- Returns an artist by name.

##### Post '/artists' 
- takes the body of the request and creates an artist with the key value pair of 'name: (artist name)'.

##### Delete '/artists/<<artist name>>' 
- takes the artists name and finds the hit, Youtube links and its name then deletes them all. 

### Hits

##### Get '/hits' 
- Returns a list of all artist's hits.

##### Post '/hits'
- takes the body of the request and creates a hit with the key value pair of 'name: (artist name)' and 'hit: (artist's hit)'.

### Youtube Links

##### Get '/youtube'
- Returns a list of all artist's Youtube concert links.

##### Get '/youtube/<<artist name>>'
- Returns an artist's links by the arist's name.

##### Put '/<<artist name>>'
- Takes the body of the request and updates an artist's link with the key value pair of 'link: (artist's video link)'


#Planning
- The bulk of this was planned using pen and paper so its not very clear.

![alt text](https://i.imgur.com/ssuRhdG.png)
![alt text](https://i.imgur.com/CKdemab.png )









