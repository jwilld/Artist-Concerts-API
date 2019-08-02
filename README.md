# All Music API

# Description
This API shows concert information for an artist from Ticketmaster. The information about the artist includes their concert videos from youtube and genre. Ultimately this would eliminate the need to 
navigate between Ticketmaster and Youtube to see how an artist's concert is.


# APIs used and why
### Concert Artists/Genres
 ###### Ticketmaster - https://developer.ticketmaster.com
 Artists and their genres and drawn from Ticketmster.

### Concert Videos
 ###### Youtube - https://developers.google.com/youtube/v3/getting-started
 The videos for each artist are from Youtube. 

 #Technologies
 - Created with Express, Mongoose and Node.js
 - Deployed with Heroku
 - Hosted with MongoDB Atlas
 - Tested on Postman

 #Dependencies
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
### Genres
    {
        "_id": "5d4408c421d96a18fa76f5e8",
        "genre": "Hip-Hop/Rap",
        "name": "Kevin Gates",
        "__v": 0
    },
    {
        "_id": "5d4408c421d96a18fa76f5e9",
        "genre": "Hip-Hop/Rap",
        "name": "NF",
        "__v": 0
    }





