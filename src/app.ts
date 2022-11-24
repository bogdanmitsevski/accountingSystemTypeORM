require('dotenv').config()
import express from 'express';
import connection from './db';
const app = express();
const port = process.env.PORT || 3090;
import router from '../src/routes/index';
app.use(express.json());

try {
    connection();
    app.use('/api',router);
    app.listen(port, ()=>{
        console.log(`Server is working on PORT ${port}`);
    })
}
catch(e) {
    console.log(e);
}