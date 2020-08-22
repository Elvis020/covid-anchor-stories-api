const express = require("express")

// Fake Handler for our requset in Express
const handleCreateStory = require('./handlers/handleCreateStory');
const handleFindStories = require("./handlers/handleFindStories");

// Creating a story route⏩ 
const storyRoute = express.Router();


storyRoute.post("/", handleCreateStory );
storyRoute.get("/", handleFindStories );
storyRoute.get("/:id", (req,res) => res.send("You reached story with id"));
storyRoute.patch("/:id", (req,res) => res.send("You updated stories"));
storyRoute.delete("/", (req,res) => res.send("You deleted stories"));


module.exports = storyRoute;
