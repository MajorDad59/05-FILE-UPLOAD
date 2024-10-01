import express from "express";
import * as productsController from "../controllers/products.controller.js";
import upload from "../middlewares/multer.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(upload.single("image"), productsController.create)
  .get(productsController.getAll);

export default router;
