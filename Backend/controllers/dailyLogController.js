require('dotenv').config();
const DailyLog = require('../models/dailyLogSchema');

// GET METHOD - Get all daily logs
const getLogs = (req, res) => {
    try {
        DailyLog.find().then((logs) => {
            res.status(200).json({
                success: true,
                message: "Daily logs retrieved successfully",
                data: logs
            });
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}
// GET METHOD - Get specific log
const getSpecificLog = async (req, res) => {
    try {
        const { id } = req.params
        const log = await DailyLog.findById(id)
        res.status(200).json({
            success: true,
            message: "log fetched successfully",
            data: log
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}
// POST METHOD - Create a new daily log
const createLog = async (req, res) => {
    try {
        const newLog = await DailyLog.create(req.body);
        res.status(201).json({
            success: true,
            message: "Daily log created successfully",
            data: newLog
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//DELETE METHOD - Delete a daily log by ID 
const deleteLog = async (req, res) => {
    try {
        const deletedLog = await DailyLog.findByIdAndDelete(req.params.id);
        if (!deletedLog) {
            return res.status(404).json({
                success: false,
                message: "Daily log not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Daily log deleted successfully",
            data: deletedLog
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//UPDATE METHOD - Update a daily log by ID
const updateLog = async (req, res) => {
    try {
        const updatedLog = await DailyLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLog) {
            return res.status(404).json({
                success: false,
                message: "Daily log not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Daily log updated successfully",
            data: updatedLog
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = { getLogs, createLog, deleteLog, updateLog, getSpecificLog };