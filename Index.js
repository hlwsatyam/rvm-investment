const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { DBConnection } = require("./DBConnect/DBConnection");
const { Messagerouter } = require("./Routers/Messagerouter");
const { AdminRouter } = require("./Routers/Adminrouter");
const { Interestrouter } = require("./Routers/Intrestrouter");
const { AuthRouter } = require("./Routers/AuthRouter");

const App = express();

// Database connection
DBConnection();

// Middlewares
App.use(cors());
App.use(express.json());
App.use("/api/user", Messagerouter);
App.use("/api/intrest", Interestrouter);

const PORT = process.env.PORT || 8800;

// for admin panel
App.use("/api/auth", AuthRouter);
App.use("/api/admin", AdminRouter);

App.listen(PORT, () => {
  console.log(`Server Is Running! ${PORT}`);
});
