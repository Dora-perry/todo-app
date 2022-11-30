import express, { Request, Response } from 'express';
import logger from 'morgan';
import dotenv from 'dotenv'

dotenv.config()


const app = express();
app.use(express.json())
app.use(logger("dev"))

app.get('/',)

const PORT = 6000;

app.listen(PORT, () => {
    console.log(`Sever is running at localhost://${PORT}`);
    
})
