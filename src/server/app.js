const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const requestPost = require("./handleRequest.js");

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

// post
app.post("/article", requestPost.validateInputRequest, requestPost.postRequest);

// test
app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

module.exports = app;
