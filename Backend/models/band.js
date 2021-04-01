const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  name: { type: String, required: true },
  style: { type: String, required: true },
});

const Band = mongoose.model("Band", bandSchema);

module.exports = Band;
