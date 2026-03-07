import express from "express";
import { createProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/generate", createProduct);

export default router;
