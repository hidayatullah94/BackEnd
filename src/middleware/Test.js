const express = require("express");
const { test } = require("../controller/Test");
const Route_Test = express.Router();
Route_Test.post("/");
Route_Test.get("/test", test);
Route_Test.get("/:id");
Route_Test.put("/:id");
Route_Test.delete("/:id");
module.exports = Route_Test;
