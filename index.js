const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');



require('./db/db');
const adminController = require('./controllers/admin');
const usersController = require('./controllers/users');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(methodOverride('_method'));






















app.use('/admin', adminController);
app.use('/users', usersController);


app.listen(7000, () =>{
	console.log('app is listening to ya port')
})