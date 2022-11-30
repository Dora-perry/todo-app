import express, { Request, Response } from 'express';
import logger from 'morgan';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import todoRouter from './routes/todoRoutes'
const app = express();
// dotenv.config()


mongoose.connect('mongodb://localhost:27017/todo', () => {
    console.log('Db connected succesfully');
    
})

app.use(express.json())
app.use(logger("dev"))

app.use('/todo', todoRouter)


const port = 3005;

app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`);
    
})
export default app