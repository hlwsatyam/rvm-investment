const express = require("express");
const {
  AdminPanelForMessage,
  Deletedata,
  AdminPanelForIntrest,
  GetTrash
} = require("../Controllers/AdminControllers");

const AdminRouter = express.Router();

AdminRouter.get("/messages", AdminPanelForMessage);
AdminRouter.get("/intrests", AdminPanelForIntrest);
AdminRouter.get("/trash", GetTrash);
AdminRouter.post("/delete/:id", Deletedata);

module.exports = { AdminRouter };
