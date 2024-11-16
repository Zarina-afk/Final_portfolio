import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/routes.js';
import connectDB from './db/connectDB.js';
import path from 'path';
const app = express();
const port = process.env.PORT || 3000
const DATABASEURL = process.env.DATABASEURL||'MONGO_URL="mongodb+srv://codewithzarina:codewithzarina@cluster0.apnsc.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"';

// database configuration
connectDB(DATABASEURL)

// setup for static files
app.use(express.static(path.join(process.cwd(), 'public')));

//ejs setup 
app.set('view engine', 'ejs');
app.set('views', './views')

// create routes
app.use('/', routes)

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})