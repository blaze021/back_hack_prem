const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Start of Middlewares

app.use(cors());
app.use(express.json());

// End of Middlewares

// Routes
const teamRoute = require('./routes/team');
const matchRoute = require('./routes/match');
const sortRoute = require('./routes/sort');
const searchRoute = require('./routes/search');

app.use('/team', teamRoute);
app.use('/match', matchRoute);
app.use('/sort', sortRoute);
app.use('/search', searchRoute);

app.get('/', (req, res) => {
	res.send('We are on home');
});

// End of Routes

// MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, () => {
	console.log('Connected to MongoDB');
});

// Listen

app.listen(port, () => {
	console.log(`Server running at port no: ${port}`);
});
