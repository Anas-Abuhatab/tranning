'use strict';

const express =require('express');
const cors = require('cors');
const app = express();
const { getApiData, getFaruitData, createFaruitData, deleteFaruitData, updateFaruitData } = require('./controllers/apiDataControlesr');
require('dotenv').config();
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
const PORT =process.env.PORT;
const MONGO_SERVER =process.env.MONGO_SERVER

mongoose.connect(`${MONGO_SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('DataBase Connected');
});

app.get('/',(req,res)=>{
    res.send('iam working');
});

app.get('/alldata',getApiData);
app.get('/fruitData',getFaruitData);
app.post('/create',createFaruitData);
app.delete('/delete/:id',deleteFaruitData);
app.put('/update/:id',updateFaruitData);

app.listen(PORT,()=>{
    console.log(`listeing to port ${PORT}`)
});
