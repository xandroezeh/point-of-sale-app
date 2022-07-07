import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productRouter from './routes/productRoutes.js';

dotenv.config();

const app = express();

//connect to MonogoDB
const DB_URL = process.env.MONGODB_URI;
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log("DB Connected")}).catch((error) => { console.log(error.message)});

//middlewares

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));

//routes

app.use('/api/products/', productRouter);

//create PORT

const PORT = process.env.PORT || 5000;

//Listen

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});