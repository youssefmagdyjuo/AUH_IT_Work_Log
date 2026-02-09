const express = require('express');
const router = express.Router();
const {getSpecificLog, getLogs, createLog,updateLog,deleteLog } = require('../controllers/dailyLogController');

router.route('/').get(getLogs).post(createLog);
router.route('/:id')
.put(updateLog)
.delete(deleteLog)
.get(getSpecificLog)

module.exports = router;