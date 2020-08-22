// Imports 🕵 and setting up variables 🧛‍♀️ 
const express = require("express");
const storyRoute = require("../modules/story/route");
const dbConnection = require("./dbConnection");
const port = 4100;



const server = async() => {

  // 🕶 Connect to database
  await dbConnection();

  // Creating an express app
  const app = express();

  // Configuration
  app.use(express.urlencoded());
  app.use(express.json());


  // Routes👷
  // app.post("/story", (req, res) => {
  //   console.log(req.body);
  //   res.send("Hey guys ⛩ 📚 stories here")
  // });
  app.use("/story", storyRoute);


  // Listening to 🇵🇹 ports 
  app.listen(port, () => {
    console.table({
      "App Name": "Covid Anchor API",
      path: `http://localhost:${port}`
    });
  });
};

module.exports = server;