const dotenv = require("dotenv");
dotenv.config();
const aylien = require("aylien_textapi");

function postRequest(req, res, next) {
  console.log(`API Key: ${process.env.API_KEY}, API ID: ${process.env.API_ID}`);
  if (!req.body.text) {
    return res.status(400).json({
      message: "Invalid input",
    });
  }
  console.log("calll");

  const textapi = new aylien({
    application_key: process.env.API_KEY,
    application_id: process.env.API_ID,
  });

  textapi.sentiment(
    {
      url: req.body.text,
      headers: {
        "X-Application-Id": process.env.API_ID,
        "X-Application-Key": process.env.API_KEY,
      },
    },
    function (error, response) {
      console.log(error, "errrrrr");
      if (error) {
        return res.status(500).json({
          message: "Internal server error",
          error: error,
        });
      }
      res.send(response);
    }
  );
}

exports.postRequest = postRequest;
