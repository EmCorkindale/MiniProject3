"use strict";
const {
  getCartProducts: getDbCartProducts,
} = require("../Models/cartProducts");
const { CartProducts } = require("../Models");
const getCartProducts = async (req, res) => {
  const cartProducts = await cartProducts.findAll({
    where: { userID: req.params.userID },
  });
  res.send({ data: cartProducts });
};

const addCartProducts = async (req, res) => {
  const cartProduct = req.body;
  const userID = req.query.userID;
  const productID = req.params.productID;
  console.log(cartProduct, userID, productID);
  const createdCartProduct = await CartProducts.create({
    ...cartProduct,
    userID,
    productID,
  });
  res.send({ result: 200, product: createdCartProduct });
};

const deleteCartProducts = async (req, res) => {
  await cartProduct.destroy({
    where: { cartProductID: req.params.cartProductID },
  });
  res.send({ result: 204 });
};

const updateCartProducts = async (req, res) => {
  await cartProduct.update(req.body, {
    where: { cartProductID: req.params.cartProductID },
  });
  res.send({ result: 200, cartProduct: req.body });
};
module.exports = {
  getCartProducts,
  addCartProducts,
  deleteCartProducts,
  updateCartProducts,
};
