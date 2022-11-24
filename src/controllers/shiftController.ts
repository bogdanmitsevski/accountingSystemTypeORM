import moment from 'moment';
import express from 'express';
import { Shift } from '../entities/Shift';
import { IsNull } from 'typeorm';
class ShiftController {
    public newShift:any;
    async startShift(req:express.Request, res:express.Response) {
    try {
        let finishedAt;
        const checkIfShiftIsOpen = await Shift.findOne({
            where: {finishedAt}
        })
        if(checkIfShiftIsOpen) {
            res.json({message:'Please, close last Shift'});
        }

        else if(!checkIfShiftIsOpen){

        const timeNow = moment();
        this.newShift = await Shift.create({
            startedAt: timeNow
        });

        await this.newShift.save();
        const id = this.newShift.id;
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
        const openShift:any = await Shift.findOne({
            where:{id:this.newShift.id},
            order:{'created_at':'DESC'}
        });

        openShift.finishedAt = finishedAt;
        // const openShift:any = await Shift.findBy({
        //     finishedAt: IsNull()
        // });
        // openShift.finishedAt = moment();
        // await openShift.save({where:{id:openShift.id}});
        // res.json(openShift);

        await openShift.save({where:{id:openShift.id}});
        res.json(openShift);
    }
    catch(e) {
        console.log(e);
    }
    }

    async getLastShift(req:express.Request, res:express.Response) {
        try {
            res.json({message:"Hello, lastShift"});
        }
        catch(e) {
            console.log(e);
        }
    }
    
};


export default new ShiftController;