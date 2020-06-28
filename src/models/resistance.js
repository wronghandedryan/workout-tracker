const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
	weight: String,
	reps: String,
	sets: String,
});

const Resistance = mongoose.model('Resistance', ResistanceSchema);

module.exports = Resistance;
