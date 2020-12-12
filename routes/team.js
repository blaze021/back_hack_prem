const express = require('express');
const Team = require('../models/Teams');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('We are on team');
});

router.post('/createTeam', async (req, res) => {
	const createTeam = new Team({
		team_name: req.body.team_name,
		wins: req.body.wins,
		losses: req.body.losses,
		ties: req.body.ties,
		score: req.body.score
	});

	try {
		const createdTeam = await createTeam.save();
		res.json(createTeam);
	} catch (err) {
		res.json({ message: err });
	}
});
module.exports = router;
