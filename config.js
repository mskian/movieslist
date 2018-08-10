require('dotenv').config();
const config = {

	urls: {
		watchlist: process.env.MOVIES_DB_API_URL
	}

};
   
module.exports = config;