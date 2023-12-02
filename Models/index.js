"use strict";
const CartProducts = require("./cartProducts");
const { Product } = require("./products"); //require the model
const User = require("./users");

User.hasMany(CartProducts, { foreignKey: "userID" });
CartProducts.belongsTo(User, { foreignKey: "userID" });
Product.hasMany(CartProducts, { foreignKey: "productID" });
CartProducts.belongsTo(Product, { foreignKey: "productID" });
// CartProducts.belongsTo(Product, { foreignKey: "productID" });

async function syncModels() {
  await Product.sync(); //sync the model
  await User.sync(); //sync the model
  // await Cart.sync(); //sync the model
  await CartProducts.sync(); //sync the model
}

module.exports = {
  syncModels,
  Product,
  User,
  CartProducts, //export the model
};
