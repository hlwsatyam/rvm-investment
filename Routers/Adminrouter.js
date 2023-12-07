const express = require("express");
const {
  AdminPanelForMessage,
  Deletedata,
  AdminPanelForIntrest,
  GetTrash
} = require("../Controllers/AdminControllers");

const AdminRouter = express.Router();

AdminRouter.get("/messages", AdminPanelForMessage);
AdminRouter.post("/intrests", AdminPanelForIntrest);
AdminRouter.post("/trash", GetTrash);
AdminRouter.post("/delete/:id", Deletedata);

module.exports = { AdminRouter };
