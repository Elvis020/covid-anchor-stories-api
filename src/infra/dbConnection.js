const mongoose = require("mongoose")


// Connecting the data 😇using async-await📢
const dbConnection = async () => {
  await mongoose.connect("mongodb://localhost:27017/Stories",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
}
 
module.exports = dbConnection;
