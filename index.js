
const express = require('express');
require('dotenv').config();
let db = require('./db');
const app = express();

async function assertDBConnection() {
	try {
		await db.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database: ', error.message);
		process.exit(1);
	}
}

async function init() 
{
	await assertDBConnection();

	app.listen(process.env.APP_PORT, () => {
		console.log(`Example server listening on port ${process.env.APP_PORT}`);
  	});


	app.get('/', (req, res) => {
		res.send('Hello World!');
	});
}

init();