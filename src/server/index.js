// const path = require("path");
// const express = require("express");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// const aylien = require("aylien_textapi");
// dotenv.config();

// const app = express();

// const cors = require("cors");

// const textapi = new aylien({
//   application_key: process.env.API_KEY,
// });

// app.use(cors());
// app.use(bodyParser.json());

// app.use(express.static("dist"));
// //app.use(express.static('src/client'))

// console.log(__dirname);

// //variable for url and api key

// app.get("/", function (req, res) {
//   //res.sendFile('dist/index.html')
//   res.sendFile(path.resolve("src/client/views/index.html"));
// });

// // POST Route

// // designates what port the app will listen to for incoming requests
// app.listen(8080, function () {
//   console.log("Example app listening on port 8080!");
// });

const app = require("./app");

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
