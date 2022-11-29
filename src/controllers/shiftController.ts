import moment from 'moment';
import express from 'express';
import { Shift } from '../entities/Shift';
import { IsNull } from 'typeorm';
import { Sell } from '../entities/Sell';
import { checkOpenShift } from '../utils/shiftControllerFunctions';
import { getLastShift } from '../utils/shiftControllerFunctions';
class ShiftController {
    async startShift(req:express.Request, res:express.Response) {
    try {
        const checkIfShiftIsOpen = await checkOpenShift();
        if(checkIfShiftIsOpen) {
            res.json({message:'Please, close last Shift'});
        }

        else {

        const timeNow = moment();
        const newShift = await Shift.create({
            startedAt: timeNow
        });

        await newShift.save();
        const id = newShift.id;
        res.json({message:`New Shift with ${id} was created`});
    };
}

    catch(e) {
        console.log(e);
    }
}

    async finishShift(req:express.Request, res:express.Response) {
        let finishedAt = moment();
    try {
        const openShift:any = await checkOpenShift();

        openShift.finishedAt = finishedAt;

        await openShift.save({where:{id:openShift.id}});
        res.json({message:`Shift with ID: ${openShift.id} was successfully closed`});
    }
    catch(e) {
        console.log(e);
    }
    }

    async getLastShift(req:express.Request, res:express.Response) {
        try {
            const LastShift = await getLastShift();
            const AllSells = await Sell.find({
                where: {shiftId: LastShift?.id}
            });

            res.json(AllSells);
        }
        catch(e) {
            console.log(e);
        }
    }
    
};


export default new ShiftController;