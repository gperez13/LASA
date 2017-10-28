const mongoose = require('mongoose');

const practicesSchema = new mongoose.Schema({
	Name: String,
    Location: String,
    Body: String

})




module.exports = mongoose.model('practices', practicesSchema)
