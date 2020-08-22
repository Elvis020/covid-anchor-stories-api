const Stroy = require('../dbSchema');

/**
 * This is a handler for finding stories
 * @param {*} req
 * @param {*} res
 */

const handleFindStories = async (req, res) => {
    const stories = await Stroy.find({});
    //  Sending Story
    res.status(200).json({
        data: stories,
        error: {
            code: null,
            message: null
        }
    });
};



module.exports = handleFindStories;