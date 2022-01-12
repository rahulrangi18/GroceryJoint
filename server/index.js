import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './db/db.js';
import Routes from './routes/Routes.js';
import defaultProduct from './default.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',Routes);

app.listen(6060, () => {
    console.log('server start at port 6060');
});


db();

defaultProduct();