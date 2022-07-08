import express from 'express';
import { getProductController,  addProductController } from '../controllers/productControllers.js';

const productRouter = express.Router();

productRouter.get('/', getProductController);

productRouter.get('/addproducts', addProductController);

export default productRouter;