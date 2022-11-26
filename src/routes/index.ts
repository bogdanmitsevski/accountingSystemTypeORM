import express from 'express';
const router = express.Router();

//shifts
router.use('/', require('../routes/shifts'));
router.use('/', require('../routes/shifts'));
router.use('/', require('../routes/shifts'));

//items
router.use('/', require('../routes/items'));
router.use('/', require('../routes/items'));

//sells
router.use('/', require('../routes/sells'));

export default router;