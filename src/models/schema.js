const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	exercise: {
		type: String,
		name: String,
		date: String,
	},

	resistance: {
		type: resistance,
		duration: String,
		weight: String,
		reps: String,
		sets: String,
	},

	cardio: {
		name: String,
		duration: String,
		distance: String,
	},
});

workoutSchema.methods.coolifier = function () {
	this.exercise = `${this.exercise}`;
	return this.exercise;
};

workoutSchema.methods.makeCool = function () {
	this.isCool = true;
	return this.isCool;
};

const User = mongoose.model('Workout', workoutSchema);

module.exports = workout;
