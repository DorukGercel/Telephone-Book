const express = require("express");
const validate = require("../middlewares/validate");
const {createPerson} = require("../validators/Person");
const {getAll, postPerson} = require("../controllers/Person");
const router = express.Router();

router.get("/", getAll);
router.post("/", validate(createPerson, "body"), postPerson);

module.exports = router;