import express from 'express';
import ItemController from '../controllers/itemController';
const router = express.Router();

router.post('/createItem', ItemController.createItem);
router.get('/items', ItemController.getItem);

module.exports =  router;