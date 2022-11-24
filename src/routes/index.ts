import express from 'express';
const router = express.Router();

//shifts
//router.use('/startShift', require('../routes/shifts'));
router.use('/finishShift', require('../routes/shifts'));
//router.use('/getLastShift', require('../routes/shifts'));

//items
router.use('/createItem', require('../routes/items'));
router.use('/items', require('../routes/items'));

//sells
router.use('/createSell', require('../routes/sells'));

export default router;