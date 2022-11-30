import { createConnection } from 'typeorm';
import { Item } from './entities/Item';
import { Sell } from './entities/Sell';
import { Shift } from './entities/Shift';
import { Users } from './entities/User';

const connection = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '367912',
      database: 'accounting1',
      entities: [Item, Sell, Shift, Users],
      synchronize: true
    });

    console.log('DataBase is Connected');
  } catch (e) {
    console.log('DataBase is not Connected');
  }
};

export default connection;
