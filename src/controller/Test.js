const { request, response } = require("express");

const test = async (req = request, res = response) => {
  try {
    console.log("hallo wordl");
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

module.exports = { test };
