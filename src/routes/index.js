const express = require('express');
const router = express.Router();

router.get('../public/js', async (req, res) => {
	const posts = await exercise.find();
	res.send(posts);
});


module.exports = {
	api: apiRoutes,
	html: htmlRoutes,
};