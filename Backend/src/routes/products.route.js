import express from "express";
import { getProducts } from "../controller/products.controller.js";

const router = express.Router();

router.get("/", getProducts);

export default router;
