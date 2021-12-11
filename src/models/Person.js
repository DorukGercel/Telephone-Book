const Mongoose = require("mongoose");

const PersonSchema = new Mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    tel_no: String
  },
  { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("person", PersonSchema);