import express from 'express';
import { getProductController,  addProductController, deleteProductController } from '../controllers/productControllers.js';

const productRouter = express.Router();

productRouter.get('/', getProductController);

productRouter.post('/addproducts', addProductController);

productRouter.delete('/:id', deleteProductController);

export default productRouter;