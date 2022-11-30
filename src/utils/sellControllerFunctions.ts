import { Shift } from '../entities/Shift';
import { IsNull } from 'typeorm';
import { Item } from '../entities/Item';

function getLastShiftId() {
  return Shift.findOne({
    where: {},
    order: { id: 'DESC' }
  });
}

function getLastItemId() {
  return Item.findOne({
    where: {},
    order: { created_at: 'DESC' }
  });
}

function ItemAviability() {
  return Item.findOne({
    where: {}
  });
}

function ShiftAviability() {
  return Shift.findOne({
    where: { finishedAt: IsNull() }
  });
}

export {
  getLastShiftId,
  getLastItemId,
  ItemAviability,
  ShiftAviability
};
