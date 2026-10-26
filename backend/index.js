const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});
const app =express();
const connectDB = require('./config/db');
connectDB();
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT;

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//importing routes
const contactRoutes = require('./routes/contact');
const eventRoutes = require('./routes/event');
const galleryRoutes = require('./routes/gallery');
const noticeRoutes = require('./routes/notice');
const authRoutes = require('./routes/auth');


//using routes
app.use('/api/contact', contactRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/notice', noticeRoutes);
app.use('/api/gallery', galleryRoutes);


app.get('/', (req ,res)=>{
    return res.send('hello from backend');
})

app.listen(PORT, ()=> {
    console.log(`server is running on port : ${PORT}`);
})
