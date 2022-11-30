import express from 'express';
import { Item } from '../entities/Item';

class ItemController {
  async createItem(req:express.Request, res:express.Response) {
    try {
      const { name, price } = req.body;

      const checkItem = await Item.findOne({
        where: { name }
      });

      if (checkItem) {
        res.status(400).json({ message: `Item with ${name} was already created` });
      } else {
        const newItem = await Item.create({
          name: name,
          price: price
        });

        await newItem.save();
        res.json({ message: `Item with ${name} was created successfully` });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getItem(req:express.Request, res:express.Response) {
    try {
      const allItems = await Item.find();
      res.json(allItems);
    } catch (e) {
      console.log(e);
    }
  }
}
export default new ItemController();
