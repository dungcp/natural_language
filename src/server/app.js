const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const mockAPIResponse = require("./mockAPI.js");
const requestPost = require("./handleRequest.js");

const app = express();
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
  //res.sendFile('dist/index.html')
  res.sendFile(path.resolve("dist/index.html"));
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

// post
app.post("/article", requestPost.postRequest);

// test
app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

module.exports = app;
