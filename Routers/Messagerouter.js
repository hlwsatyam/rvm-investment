const express = require("express");
const { FormSubmit } = require("../Controllers/FormControllers");
const Messagerouter = express.Router();

Messagerouter.post("/sentForm", FormSubmit);

module.exports = { Messagerouter };
