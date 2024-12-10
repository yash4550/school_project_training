const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Childname: { type: String, required: true },
  className: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
});

const Parent = mongoose.model("Parent", parentSchema);

module.exports = Parent;