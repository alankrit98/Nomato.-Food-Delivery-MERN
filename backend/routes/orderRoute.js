import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { placeOrder } from '../controllers/orderController.js';
import { verifyOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);


export default orderRouter;