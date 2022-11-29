import { Shift } from '../entities/Shift';
import { IsNull } from 'typeorm';

function checkOpenShift () {
    return Shift.findOne({
        where: {'finishedAt':IsNull()}
    })
};

function getLastShift () {
    return Shift.findOne({
        where:{},
        order:{'created_at': 'DESC'}
    });
}

export {
    checkOpenShift,
    getLastShift
}