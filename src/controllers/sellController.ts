import express from 'express';
import { Sell } from '../entities/Sell';
import { Shift } from '../entities/Shift';
import { IsNull } from 'typeorm';
import { Item } from '../entities/Item';
import {getLastShiftId} from '../utils/sellControllerFunctions';
import {getLastItemId} from '../utils/sellControllerFunctions';
import {ItemAviability} from '../utils/sellControllerFunctions';
import {ShiftAviability} from '../utils/sellControllerFunctions';


class SellController {
    async createSell (req:express.Request, res:express.Response) {
    try {
    const {ItemId, Price} = req.body;
    const resultGetLastShiftId:any = await getLastShiftId();
    const ActiveItemId = await Item.findOne({
        where: {id:ItemId}
    });
    const LastItemId = await getLastItemId();
    const LastShiftId = resultGetLastShiftId?.id;
    const  checkifItemIsAvaliable = await ItemAviability();
    const checkIfShiftIsAvalieable = await ShiftAviability();

    if(!checkIfShiftIsAvalieable) {
        res.json({message: 'Please, Start New Shift at first'});
    }

    else if(!checkifItemIsAvaliable) {
        res.json({message: 'Please, Add New Item at first'});
    }

    else if(!ItemId && !Price) {
        const newSell = await Sell.create({
            shiftId:LastShiftId,
            itemId:LastItemId?.id,
            price:LastItemId?.price
        });
        await newSell.save();
        res.json({message: 'New Sell was created'});
    }
    else if(ItemId) {
        const newSell = await Sell.create({
            shiftId:LastShiftId,
            itemId:ActiveItemId?.id,
            price:ActiveItemId?.price
        });

        await newSell.save();
        res.json({message: 'New Sell was created'});
    }



    else {
        if(ActiveItemId) {
        const newSell = await Sell.create({
            shiftId:LastShiftId,
            itemId:ActiveItemId.id,
            price:Price
        });

        await newSell.save();
        res.json({message: 'New Sell was created'});
    }

        else if(!ActiveItemId){
        res.status(400).json({message: `Note with ${ItemId} is not exist`});
    }

        else {
        const newSell = await Sell.create({
            shiftId:LastShiftId,
            itemId:LastItemId?.id,
            price:Price
        });

        await newSell.save();
        res.json({message: 'New Sell was created'});
    }

        
}
    }
catch(e) {
    console.log(e);
}

    };
};

export default new SellController;