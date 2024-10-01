import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import connectToMongoDB from './db/connectDb.js';
import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

// Connect to MongoDB
connectToMongoDB();
app.use(express.urlencoded({ extended: true }));
app.use('/book', bookRoute)
app.use('/user', userRoute)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Use the port from the environment variable or default to 7000
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
