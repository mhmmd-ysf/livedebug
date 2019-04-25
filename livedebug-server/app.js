require('dotenv').config({path: './.env'});
const express = require('express');
const app = express();
const port = 3000
const router = require('./routes/index');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/phase-2-${process.env.NODE_ENV}`, { useNewUrlParser: true });


app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(router);

app.listen(port, () => {
  console.log(`listening on port: ${port}!`)
})

module.exports = app
