const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Client } = require("pg");

dotenv.config();

// const client = new Client({
//     port: process.env.PG_PORT
// })
// client.connect().then(() => console.log("connected to postgreSQL db"))
//     .catch((error) => console.log(error));

const connectToDB = () => {
    const MONGO_URL = process.env.MONGO_URL;
    // try {
    //     await mongoose.connect(MONGO_URL)
    // } catch (error) {
    //     console.log(error);
    // }

    mongoose.connect(MONGO_URL)
        .then(() => console.log("connected to db"))
        .catch((error) => console.log(error));

}


module.exports = { connectToDB, }