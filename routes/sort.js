const express = require('express');
const Team = require('../models/Teams');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Get the sorted data');
});

router.get('/name', async (req, res) => {
	try {
		const leaderBoard = await Team.find().sort({ team_name: 1 });

		res.json(leaderBoard);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/score', async (req, res) => {
	try {
		const leaderBoard = await Team.find().sort({ score: -1 });

		res.json(leaderBoard);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
