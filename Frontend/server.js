const express = require("express");
const app = express();
const morgan =require('morgan');
const PORT = process.env.PORT || 3000;

const proxy = require('express-http-proxy');


app.use(morgan('dev'));
console.log("The directory name is " + __dirname)
  app.use(express.static("public"));
app.use('/', proxy('http://localhost:3001'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
