const hs = require("http-status");
const { list, add } = require("../services/Person");

const getAll = (req, res) => {
  list()
    .then((userList) => {
      if (!userList)
        res.status(hs.INTERNAL_SERVER_ERROR).send({ error: "Internal error occured!" });
      res.status(hs.OK).send(userList);
    })
    .catch((e) => res.status(hs.INTERNAL_SERVER_ERROR).send(e));
};

const postPerson = (req, res) => {
  add(req.body)
    .then((createdUser) => {
      if (!createdUser)
        res.status(hs.INTERNAL_SERVER_ERROR).send({ error: "Internal error occured!" });
      res.status(hs.OK).send(createdUser);
    })
    .catch((e) => res.status(hs.INTERNAL_SERVER_ERROR).send(e));
};

module.exports = {
  getAll,
  postPerson
};
