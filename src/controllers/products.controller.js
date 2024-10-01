import { formatImage } from "../middlewares/multer.middleware.js";
import { v2 as cloudinary } from "cloudinary";
import * as productService from "../services/products.service.js";

const create = async (req, res) => {
  const productImage = req.file;

  if (!productImage) {
    throw new Error("Aucun fichier fourni");
  }

  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new Error(
      "Veuillez fournir une image de taille inférieure à 1Mo"
    );
  }

  const file = formatImage(productImage);
  const response = await cloudinary.uploader.upload(file, {
    folder: "products",
  });
  const image = response.secure_url;

  const newProduct = { ...req.body, image };
  const product = await productService.create(newProduct);

  res.status(201).json({ product });
};

const getAll = async (_req, res) => {
  const products = await productService.getAll();
  res.status(200).json({ products });
};

export { create, getAll };
