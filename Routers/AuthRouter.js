const express = require("express");
const { AuthLogin } = require("../Controllers/AuthControllers.js");

const AuthRouter = express.Router();

AuthRouter.post("/login", AuthLogin); 


module.exports = { AuthRouter };
