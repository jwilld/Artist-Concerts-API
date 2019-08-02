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

 # Technologies
 - Created with Express, Mongoose and Node.js
 - Deployed with Heroku
 - Hosted with MongoDB Atlas
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

# Paths

### Artists

##### Get '/artists' or '/'
- Returns a list of all artists.

##### Get '/<<artist name>>' 
- Returns an artist by name.

##### Post '/artists' 
- takes the body of the request and creates an artist with the key value pair of 'name: (artist name)'.

##### Delete '/artists/<<artist name>>' 
- takes the artists name and finds the genre, Youtube links and its name then deletes them all. 

### Genres

##### Get '/genres' 
- Returns a list of all artist's genres.

##### Post '/genres'
- takes the body of the request and creates a genre with the key value pair of 'name: (artist name)' and 'genre: (artist's genre)'.

### Youtube Links

##### Get '/youtube'
- Returns a list of all artist's Youtube concert links.

##### Get '/youtube/<<artist name>>'
- Returns an artist's links by the arist's name.

##### Put '/<<artist name>>'
- Takes the body of the request and updates an artist's link with the key value pair of 'link: (artist's video link)'







