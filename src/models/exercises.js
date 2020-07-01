const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
	type: String,
	date: { type: Date, default: Date.now },
});

const Exercises = mongoose.model('Exercises', ExercisesSchema);

module.exports = Exercises;
