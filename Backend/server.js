const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(morgan("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect("mongodb://localhost/Bands", {useNewUrlParser: true, useUnifiedTopology: true});
console.log("The directory name is " + __dirname)
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
