const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
	res.send(database.users);
})

app.post('/signin',(req,res) => {signin.handleSignin(req,res,db,bcrypt)})

app.post('/register', (req,res) => {register.handleRegister(req,res,db,bcrypt)})

app.get('/profile/:id', (req,res) => {profile.handleProfileGet(req,res,db)})

app.put('/image',(req,res) => {image.handleImage(req,res,db)})

app.post('/imageurl', (req,res) => {image.handleApiCall(req,res)})

app.listen(3000, () => {
	console.log('App is listening on port 3000');
})
