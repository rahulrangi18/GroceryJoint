import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:'./config.env'});

const db = () => {

    
    const URL = process.env.DB;
    
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongo connection open!')
    }).catch(err => {
        console.log('Ohh No Mongo connection error!!')
        console.log(err);
    })
    
}

export default db;