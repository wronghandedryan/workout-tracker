const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
	useNewUrlParser: true,
});

// db.User.create({ name: 'Ernest Hemingway' })
// 	.then((dbUser) => {
// 		console.log(dbUser);
// 	})
// 	.catch(({ message }) => {
// 		console.log(message);
// 	});

app.get('/models/cardio', (req, res) => {
	db.Cardio.find({})
		.then((dbCardio) => {
			res.json(dbCardio);
		})
		.catch((err) => {
			res.json(err);
		});
});

app.get('/models/resistance', (req, res) => {
	db.Resistance.find({})
		.then((dbResistance) => {
			res.json(dbResistance);
		})
		.catch((err) => {
			res.json(err);
		});
});

app.post('/submit', ({ body }, res) => {
	db.exercises
		.create(body)
		.then(({ _id }) =>
			db.User.findOneAndUpdate(
				{},
				{ $push: { exercises: _id } },
				{ new: true },
			),
		)
		.then((dbExercises) => {
			res.json(dbExercises);
		})
		.catch((err) => {
			res.json(err);
		});
});

app.get('/populateExercises', (req, res) => {
	db.User.find({})
		.populate('exercises')
		.then((dbIndex) => {
			res.json(dbIndex);
		})
		.catch((err) => {
			res.json(err);
		});
});

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
