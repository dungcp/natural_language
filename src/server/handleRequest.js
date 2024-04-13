const dotenv = require("dotenv");
dotenv.config();

function postRequest(req, res, next) {
  console.log(`API Key: ${process.env.API_KEY}, API ID: ${process.env.API_ID}`);
  if (!req.body.text) {
    return res.status(400).json({
      message: "Invalid input",
    });
  }
  console.log("calll");
  const aylien = require("aylien_textapi");
  const textapi = new aylien({
    application_key: process.env.API_KEY,
    application_id: process.env.API_ID,
  });

  textapi.sentiment(
    {
      url: req.body.text,
      // headers: {
      //   "X-Application-Id": process.env.API_ID,
      //   "X-Application-Key": process.env.API_KEY,
      // },
    },
    function (error, response) {
      res.send(response);
    }
  );
}

exports.postRequest = postRequest;
