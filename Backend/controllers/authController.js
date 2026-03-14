const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * @desc    Register new user (OWNER ONLY)
 * @route   POST /auth/register
 * @access  Private (Owner)
 */
const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const exists = await User.findOne({ username });
        if (exists) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            password: hashedPassword,
            role: "user" // كل اليوزرات الجديدة role: user
        });

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Register error" });
    }
};

/**
 * @desc    Login
 * @route   POST /auth/login
 * @access  Public
 */
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        console.log('no  errors ');

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        console.log('created jwt');

        res.status(200).json({
            token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        });
        console.log('reutn succesfully');
        
    } catch (error) {
        console.error("Login error:", error.message);
        res.status(500).json({ message: "Login error" });
    }
};

module.exports = { register, login };
