const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
	weight: Number,
	reps: Number,
	sets: Number,
});

const Resistance = mongoose.model('Resistance', ResistanceSchema);

module.exports = Resistance;
