const mongoose = require('mongoose');


const connectionString = 'mongodb://localhost/practices';


mongoose.connect(connectionString);


mongoose.connection.on('connected', () => {
	console.log('mongoose connection to ' + connectionString)
})

mongoose.connection.on('error', () => {
	console.log('mongoose connection to ' + error)
})

mongoose.connection.on('disconnected', () => {
	console.log('mongoose connection disconnected')
})

