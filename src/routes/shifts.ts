import express from 'express';
import shiftController from '../controllers/shiftController';
const router = express.Router();
import authMiddleware from '../authMiddleware';

router.post('/startShift', authMiddleware, shiftController.startShift);
router.post('/finishShift', authMiddleware, shiftController.finishShift);
router.get('/getLastShift', authMiddleware, shiftController.getLastShift);

module.exports = router;