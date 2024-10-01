import Product from "../models/products.model.js";

const getAll = () => {
  return Product.find({});
};

const create = (data) => {
  return Product(data).save();
};

export { create, getAll };
