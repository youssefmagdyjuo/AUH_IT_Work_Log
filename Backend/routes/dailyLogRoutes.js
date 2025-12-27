const express = require('express');
const router = express.Router();
const { getLogs, createLog,updateLog,deleteLog } = require('../controllers/dailyLogController');

router.route('/').get(getLogs).post(createLog);
router.route('/:id').put(updateLog).delete(deleteLog);

module.exports = router;