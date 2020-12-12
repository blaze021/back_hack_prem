const express = require('express');
const Team = require('../models/Teams');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Add a search parameter');
});

router.get('/name/:teamName', async (req, res) => {
	try {
		const leaderBoard = await Team.find({ team_name: req.params.teamName }).sort({ score: -1 });

		res.json(leaderBoard);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/score/:scoreValue', async (req, res) => {
	try {
		const leaderBoard = await Team.find({ score: req.params.scoreValue }).sort({ team_name: 1 });

		res.json(leaderBoard);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
