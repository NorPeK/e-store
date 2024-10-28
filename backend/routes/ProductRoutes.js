import express from 'express'
import Product from '../models/Product.js';
import mongoose from "mongoose";
import { createProducts, deleteProduct, getProducts, updateProducts } from '../controllers/ProductController.js';

const router = express.Router();

router.get("/" , getProducts)

router.post("/" , createProducts);

router.put("/:id" , updateProducts)

router.delete("/:id" , deleteProduct)

export default router;