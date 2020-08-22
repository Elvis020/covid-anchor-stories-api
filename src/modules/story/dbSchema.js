// 🇲🇳Setting the Schema 😃
const mongoose  = require("mongoose");
const Schema = mongoose.Schema;


// 🇻🇬 Adding a Schema for the view
const View = new Schema({
    ip: {
        type: String,
        required: true
    },
    cookie: {
        type: String,
        required: true
    }
});

const storySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "./img/default-story.jpg"
    },
    views: {
        type: [View],
        default: []
    },
    created_At: {
        type: Date,
        default: Date.now
    },
    updated_At: {
        type: Date,
        default: null 
    }
})

// 🙇‍♂️ Creating our models
const Story = mongoose.model("Story", storySchema)


module.exports = Story;