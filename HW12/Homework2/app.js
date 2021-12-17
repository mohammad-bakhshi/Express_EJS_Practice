const express = require('express');
const app = express();
const { join } = require('path');
const Login=require('./routes/login');
const Register=require('./routes/register');


// static public
app.use(express.static(join('./public')));

// ejs setup
app.set('view engine', 'ejs');
app.set('views', join(__dirname, './views'));

// body parse
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// routes middleware
app.use('/login',Login);
app.use('/register',Register);
//app.use('/', appRoutes);

app.listen(8000, '127.0.0.1', () => console.log('Listening on :8000'));