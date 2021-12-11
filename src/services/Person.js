const Person = require("../models/Person");

const list = () => {
  return Person.find({});
};

const add = (data) => {
  const person = new Person(data);
  return person.save();
};

module.exports = {
  list,
  add
};