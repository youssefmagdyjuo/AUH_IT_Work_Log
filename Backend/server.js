require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = require('./routes/dailyLogRoutes');

const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL; // لازم يكون مسجل الدومين الصح للـ frontend

// Middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/logs', router);
app.use('/auth', require('./routes/authRoutes'));

app.get('/', (req, res) => {
    res.send('Backend is running. Use /auth or /logs for API.');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('MongoDB connection error:', err));
