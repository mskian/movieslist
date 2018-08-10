# MoviesList

<p>Movie Watchlist 🗒 from - <code>themoviedb.org</code></p>

## Requirements

- `themoviedb.org` Account & API
- Node.JS 6 or 8x to run this CLI
- GIT to clone this Respo

## Get API KEY & SESSION ID

- Open Free Account From `https://www.themoviedb.org/faq/api`
- After creating API KEY Create an Authentication/Request Token to Create a Session ID - `https://developers.themoviedb.org/3/authentication/create-request-token` (Note a Create a REQUEST Token Copy the Token)
- Authorize the Request token to your Moviesdb account - `https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}`
- Now Create Session ID - `https://developers.themoviedb.org/3/authentication/create-session`

## Installation

- Install via GIT

```
git clone https://github.com/mskian/movieslist.git
cd movieslist
npm install
touch .env
```

- Add your themoviedb website watchlist API URL in `.env` File

File - `.env`

```
MOVIES_DB_API_URL=https://api.themoviedb.org/3/account/<USERNAME>/watchlist/movies?api_key=<YOUR API KEY>&language=en-US&session_id=<YOUR SESSION ID>
```

➡️ USERNAME = themoviedb account Username
 
➡️ YOUR API KEY - replace it with your themoviedb account API Key

➡️ YOUR SESSION ID - Replace it with your Session ID


- Execute the Script

```
node movie.js
```

## License

MIT
