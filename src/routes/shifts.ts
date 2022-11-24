import express from 'express';
import shiftController from '../controllers/shiftController';
const router = express.Router();

//router.post('/', shiftController.startShift);
router.post('/', shiftController.finishShift);
router.get('/', shiftController.getLastShift);

module.exports = router;