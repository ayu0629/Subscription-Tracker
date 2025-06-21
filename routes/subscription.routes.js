import {Router} from 'express'
import { authorize } from '../middleware/auth.middleware.js';
import { createSubscription, getUserSubscription } from '../controllers/subscription.controllers.js';

const subscriptionRouter=Router();

subscriptionRouter.get('/',(req,res)=>{
    res.send({title:'Get all Subscriptions'})
})
subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:'Get Subscription details'})
})
subscriptionRouter.get('/user/:id',authorize,getUserSubscription)
subscriptionRouter.post('/',authorize,createSubscription)
subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:'Update Subscription'})
})
subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({title:'Delete Subscription'})
})
subscriptionRouter.get('/:id/cancel',(req,res)=>{
    res.send({title:'Cancel Subscription'})
})
subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({title:'Get Upcoming Renewals'})
})


export default subscriptionRouter;