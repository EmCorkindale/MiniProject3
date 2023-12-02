"use strict";
const { getProducts: getDbProducts } = require("../Models/products");
const { Product } = require("../Models");
const getProducts = async (req, res) => {
  const products = await Product.findAll({});
  res.send({ data: products });
};

const addProducts = async (req, res) => {
  const product = req.body;
  const createdProduct = await Product.create(product);
  res.send({ result: 200, product: createdProduct });
};

const deleteProducts = async (req, res) => {
  await Product.destroy({
    where: { productID: req.params.productID },
  });
  res.send({ result: 204 });
};

const updateProducts = async (req, res) => {
  await Product.update(req.body, {
    where: { productID: req.params.productID },
  });
  res.send({ result: 200, product: req.body });
};
module.exports = { getProducts, addProducts, deleteProducts, updateProducts };
