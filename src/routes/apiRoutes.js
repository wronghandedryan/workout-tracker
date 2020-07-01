const db = require('../models');

module.exports = function (app) {
	app.get('/models/index', function (req, res) {
		db.index.find({}).then(function (dbIndex) {
			res.json(dbIndex);
		});
	});

	app.put('/models/index/:id', function (req, res) {
		db.index
			.updateOne({ _id: req.params.id }, { rating: req.body.rating })
			.then(function (dbIndex) {
				res.json(dbIndex);
			});
	});
	app.get('../api/', function (req, res) {
		db.index
			.fetchAll({ _id: req.params.is }, { exercise: req.body.workout - type })
			.then(function (dbIndex) {
				res.json(dbIndex);
			});
	});
	app.get('');
};
