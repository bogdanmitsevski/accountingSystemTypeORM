import express from 'express';
import shiftController from '../controllers/shiftController';
const router = express.Router();

router.post('/startShift', shiftController.startShift);
router.post('/finishShift', shiftController.finishShift);
router.get('/getLastShift', shiftController.getLastShift);

module.exports = router;