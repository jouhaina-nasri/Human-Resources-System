require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const Handlebars = require('handlebars')


const employeeController = require('./controllers/employeeController');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome." });
});
app.use('/',require('./Controllers/employeeController'));
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeController);

