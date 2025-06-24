import express from "express";

import {
    getALlProducts,
    createProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getALlProducts);
router.post("/", createProduct);

export default router;