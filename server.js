const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const Route_Test = require("./src/middleware/Test");
const app = express();
const port = process.env.PORT;
//MIDDLEWARE
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));
//ROUTES
app.use(Route_Test);
app.listen(port, () => {
  console.log(`server run on ,${port}`);
});
