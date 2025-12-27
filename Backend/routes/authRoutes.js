const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeOwner = require('../middleware/authorizeOwner');

// Login → Public
router.post('/login', login);

// Register → Owner only
router.post('/register', authMiddleware, authorizeOwner, register);

module.exports = router;
