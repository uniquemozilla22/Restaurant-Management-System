import mongoose from 'mongoose'
import config from 'config';
const connection = () => {
    if(!config.db__Link)  throw new Error("No Database Connection...")
  mongoose.connect(config.db__Link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  });
  const database = mongoose.connection;
  database.once("open", () => {
    console.log("Database connection sucessful");
  });
};

module.exports = connection;