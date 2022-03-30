const path = require('path');
const express = require('express');
const route = require('./routes');

const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));

// import { create } from 'express-handlebars';

// const db = require('./src/config/db');
//Connect to DB server
// db.connect();

//Template engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
 app.set('views', path.join(__dirname,'resources/views'));

//Route
 route(app);



app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`)
})