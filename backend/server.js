import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";
import mongoose from "mongoose";
import productRoutes from "./routes/ProductRoutes.js"

dotenv.config();

const app = express();

app.use(express.json()); // middleware that allows us to accept JSON in the req.body

app.use("/api/products", productRoutes)




app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
    
})