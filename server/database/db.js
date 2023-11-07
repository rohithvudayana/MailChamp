import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI = `mongodb://rohith:MailChamp@ac-yqylfox-shard-00-00.do0pdlf.mongodb.net:27017,ac-yqylfox-shard-00-01.do0pdlf.mongodb.net:27017,ac-yqylfox-shard-00-02.do0pdlf.mongodb.net:27017/?ssl=true&replicaSet=atlas-8kyoxi-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI);
        // mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;