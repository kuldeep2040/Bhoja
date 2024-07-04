import express from 'express'
import authMiddleware from '../middleware/auth.js'
import placeOder from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOder )



export default orderRouter;