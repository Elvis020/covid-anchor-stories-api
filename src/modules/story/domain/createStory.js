// Sterilize
const sterilize = (data) => (typeof data == "string" ? data.trim() : data);
const sterilizeMany = (obj) => {
    for (const key in obj) {
        obj[key] = sterilize(obj[key])
    }
    return obj;
};

// Writing a function to  🚓 validate the story
const validateStory = (unvalidateStory) => {
    let errMsgs = null;
    let data = sterilizeMany(unvalidateStory)
    // 🧛 to check/validate the object 🔂 
    if (!data.title) errMsgs += "Title is required";
    if (!data.content) errMsgs += "Content is required";
    if (!data.image && typeof data.image !== 'string') {
        errMsgs += "Image must be an alpha-numeric"
    }

    // ♾ Preparing to validate💆‍♂️
    return { data, isValidmessage: errMsgs.length < 1, message: errMsgs }


}


// Create a new story
const createStory = (unvalidateStory) => {
    // Validate Story♻🏓
    const { data, isValidmessage, message } = validateStory(unvalidateStory);
    // Checking if data is valid
    if (isValidmessage) {
        return {
            tag: "passed",
            data: {
                title: data.title,
                content: data.content,
                image: data.image,
                views: [],
                createdAt: new Date(),
                updateAt: null
            }
        };
    };

    // Return Story
    return { tag: 'Failed', message }
}

module.exports = createStory;