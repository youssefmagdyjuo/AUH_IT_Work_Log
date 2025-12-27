require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const router = require('./routes/dailyLogRoutes');

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use('/logs', router);
app.use('/auth', require('./routes/authRoutes'));
app.get('/', (req, res) => {
    res.send('Backend is running. Use /auth or /logs for API.');
});

//connect to MongoDB
mongoose.connect("mongodb+srv://logs_youusefMagdy:lSYoyIOTVeZWZZ4P@logs.ufz984y.mongodb.net/?appName=logs")
    .then(() => {
        console.log('Connected to MongoDB');
        //Running Server
        app.listen(3000, () => {
            console.log(`Server is running on port 3000...`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
