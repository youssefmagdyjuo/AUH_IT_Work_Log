const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dailyLogSchema = new Schema({
    date: { type: Date, required: false },
    // attendanceStatus: { type: String, required: true },
    tasks: { type: String, required: false },
    notes: { type: String },
    // userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}

});


module.exports = mongoose.model('DailyLog', dailyLogSchema);
