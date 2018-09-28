'use strict';

const ora = require('ora');
const fetch = require('node-fetch');
const Table = require('cli-table');
const config = require('./config');

const { urls: { watchlist } } = config;

async function fetchmovies() {

	const spinner = new ora({
		text: 'Fetching My Movie Watchlist',
		spinner: 'hamburger'
	});

	spinner.start();

	setTimeout(() => {
		spinner.color = 'yellow';
		spinner.text = 'Your Watchlist From themoviedb.org';
	}, 1000);

	try {
		await new Promise(resolve => setTimeout(resolve, 2000));
		const response = await fetch(watchlist);
		var watchlst = await response.json();
		const group = watchlst.results.map(g => [
			g.id,
			g.title,
			g.release_date
		]);
  
		const table = new Table({
			chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
				, 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
				, 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
				, 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
			style: {head: ['green']},
			head: ['ID', 'Movie', 'Release Date'],
			colWidths: [10, 45, 20]
		});

		table.push(...group);
		spinner.stop();
		console.log('\n');
		console.log(table.toString());
		console.log('\n');

	} catch (exception) {
		spinner.stop();
		console.error(`Failed to retrieve your Watchlist informations: (${exception})`);
	}
}
fetchmovies();