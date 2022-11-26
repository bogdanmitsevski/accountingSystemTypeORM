import express from 'express';
import sellController from '../controllers/sellController';
const router = express.Router();

router.post('/createSell', sellController.createSell);

module.exports = router;
