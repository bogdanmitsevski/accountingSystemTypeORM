import express from 'express';
const router = express.Router();

// shifts
router.use('/', require('../routes/shifts'));

// items
router.use('/', require('../routes/items'));

// sells
router.use('/', require('../routes/sells'));

// users
router.use('/', require('../routes/users'));

export default router;
