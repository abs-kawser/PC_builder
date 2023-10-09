import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'

import express from 'express'
import router from './../src/router.js';

dotenv.config()
const app=express()

// function bootstrap(){
//    let URI=process.env.MONGO_URI;
//    //  mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
   
// }

//bootstrap()
//Body parser implement

// Connect to MongoDB
async function connectToMongoDB() {
   try {
     await mongoose.connect(process.env.MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
     console.log('Connected to MongoDB');
   } catch (error) {
     console.error('Error connecting to MongoDB:', error);
   }
 }
 
connectToMongoDB()
 
app.use(bodyParser.json())
app.use(express.json());

app.use(cors())

//Routing Implement
app.use('/api/v1', router);

app.get('/', (req,res)=>{
   res.send('Success')
})


//Undefined route Implement
app.use('*', (req,res)=>{
   res.status(404).json({status:'fail', data:'Not Found'})
})

app.listen(process.env.PORT || 5000, ()=>{
   console.log('App Run at 5000');
})
