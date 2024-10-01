const app = express();
import connectDB from "./config/db.config.js";
import "dotenv/config";
import "express-async-errors";
import express from "express";
import notFound from "./middlewares/not-found.middleware.js";
import errorHandler from "./middlewares/error-handler.middleware.js";
import productsRouter from "./routes/products.route.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(express.json());
app.use(express.static("public"));

connectDB();

app.use("/api/v1/products", productsRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
