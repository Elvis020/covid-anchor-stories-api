const createStory = require("../domain/createStory");
const Story = require('../dbSchema')



// 🎒 Writing a handler 🤾

/**
 * 👎This is a handler for
 * creating a story 🕵 
 * @param {*} req 
 * @param {*} res 
 * 🔇 😋
 */

const handleCreateStory = async (req, res) => {
  // const data = req.body;
  // // Generate a random 🔁 id
  // data.id = Math.random().toString();

  const storyOrError = createStory(req.body)
  // ✔ Checking if create story failed
  if (storyOrError.tag == 'failed') {
    res.status(400).json({
      data: null,
      error: {
        code: "VALIDATION",
        message: storyOrError.message
      }
    });

    return;
  }

  // Persisit data in database
  const story = await Story.create(storyOrError.data);
  console.log(story);

  // 🌍 Checking if story was its created
  if (!story) {
    res.status(500).json({
      data: null,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Oops! an error occured, please try again later"
      }
    });
    return;
  }
  res.status(201).json({
    data: story,
    error: {
      code: null,
      message: null
    }
  });
}

module.exports = handleCreateStory;
