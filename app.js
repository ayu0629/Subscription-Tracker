import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDB from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from './middleware/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';

const app=express();

app.use(express.json()); //this is built-in middleware which handles json data sent in requests
app.use(express.urlencoded({extended:false})); //helps to process the form data sent via HTML forms in simple format
app.use(cookieParser);//reads cookie from incoming requests so your app can store user data
app.use(arcjetMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subcriptions', subscriptionRouter);
app.use('/api/v1/workflows',workflowRouter)

app.use(errorMiddleware);


app.get('/',(req,res)=>{
    res.send("Welcome to Subscription Tracker API!");
});
app.listen(PORT, async()=>{
    console.log(`Subscription Trcaker API is running on http://localhost:${PORT}`)
    await connectToDB()
});

export default app;