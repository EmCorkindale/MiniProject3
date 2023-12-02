const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.sequelize;
class Product extends Model {}
const axios = require("axios");

Product.init(
  {
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      required: true,
    },
    ProductCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false,
      required: true,
    },
    image: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      required: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "products", //use lowercase plural format
    freezeTableName: true,
  }
);

module.exports = {
  Product,
  // getProducts,
};
