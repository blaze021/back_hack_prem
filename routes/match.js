const express = require('express');
const Team = require('../models/Teams');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('We are on match making');
});

router.patch('/team1/:id1&:id2', async (req, res) => {
	try {
		const updateTeam1 = await Team.updateOne({ _id: req.params.id1 }, { $inc: { wins: 1, score: 3 } });
		res.json(updateTeam1);
		const updateTeam2 = await Team.updateOne({ _id: req.params.id2 }, { $inc: { losses: 1 } });
		res.json(updateTeam2);
	} catch (err) {
		res.json({ message: err });
	}
});

router.patch('/team2/:id1&:id2', async (req, res) => {
	try {
		const updateTeam1 = await Team.updateOne({ _id: req.params.id1 }, { $inc: { losses: 1 } });
		res.json(updateTeam1);
		const updateTeam2 = await Team.updateOne({ _id: req.params.id2 }, { $inc: { wins: 1, score: 3 } });
		res.json(updateTeam2);
	} catch (err) {
		res.json({ message: err });
	}
});

router.patch('/tie/:id1&:id2', async (req, res) => {
	try {
		const updateTeam1 = await Team.updateOne({ _id: req.params.id1 }, { $inc: { ties: 1, score: 1 } });
		res.json(updateTeam1);
		const updateTeam2 = await Team.updateOne({ _id: req.params.id2 }, { $inc: { ties: 1, score: 1 } });
		res.json(updateTeam2);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
