const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
	name: String,
	duration: String,
	distance: String,
});

const Cardio = mongoose.model('Cardio', CardioSchema);

module.exports = Cardio;
