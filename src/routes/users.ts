import express from 'express';
const router = express.Router();
import userController from '../controllers/userController';

router.use('/registration', userController.Registration);
router.use('/login', userController.Login);

module.exports = router;
