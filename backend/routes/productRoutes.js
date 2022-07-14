import express from 'express';
import { getProductController,  addProductController } from '../controllers/productControllers.js';

const productRouter = express.Router();

productRouter.get('/', getProductController);

productRouter.post('/addproducts', addProductController);

export default productRouter;