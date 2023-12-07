const express = require("express");
const { IntrestFormSubmit,IntrestFormUpdate } = require("../Controllers/IntrestControllers");

const Interestrouter = express.Router();

Interestrouter.post("/sentForm", IntrestFormSubmit);

Interestrouter.post("/update", IntrestFormUpdate);

module.exports = { Interestrouter };
