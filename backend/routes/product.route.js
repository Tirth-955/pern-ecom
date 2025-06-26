import express from "express";

import {
    getALlProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getALlProducts);
router.post("/", createProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;