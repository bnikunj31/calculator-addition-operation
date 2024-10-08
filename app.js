const express = require('express');

const routes = require('./routes/calculator');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set('view engine','ejs');

app.use('/',routes);


app.listen(port, ()=>console.log("Server is running"));