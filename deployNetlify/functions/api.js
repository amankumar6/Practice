const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/data", (req, res) => {
  res.json({
    name: "WiZaRd"
  });
});

app.use('/', router);
module.exports.handler = serverless(app);