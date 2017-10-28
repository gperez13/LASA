const express = require('express');
const router = express.Router();
const Practices = require('../models/practices');




router.get('/', (req, res)=>{
	Practices.find((err, practices)=>{
		if (err){
			res.send('jhguyftdrsedt')
		} else{
				res.render('bestpractices', {Practices: practices})

		}
	})
})




















module.exports = router;
