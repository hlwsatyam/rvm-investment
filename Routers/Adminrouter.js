const express = require("express");
const { AdminPanelForMessage,Deletedata, AdminPanelForIntrest } = require("../Controllers/AdminControllers");

const AdminRouter = express.Router();

AdminRouter.get("/messages", AdminPanelForMessage);
AdminRouter.get("/intrests", AdminPanelForIntrest);
AdminRouter.post("/delete/:id", Deletedata);

module.exports = { AdminRouter };