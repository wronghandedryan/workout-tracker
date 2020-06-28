const express = require('express');
const router = express.Router();

router.get('/api', async (req, res) => {
	const posts = await exercise.find();
	res.send(posts);
});





module.exports = router;
