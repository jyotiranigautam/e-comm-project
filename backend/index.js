import express from 'express';
import mongoose from 'mongoose';

const port = 5000;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/e_comm_project').then(()=>console.log("db connected..."))

app.get('/', (req, res)=>{
    res.send('hello');
})

app.listen(port, ()=>{
    console.log("app is running on the port", port);
})