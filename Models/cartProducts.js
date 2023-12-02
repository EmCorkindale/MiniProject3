const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.sequelize;
class CartProducts extends Model {}

CartProducts.init(
  {
    cartProductsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      defaultValue: 0,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "cartProducts", //use lowercase plural format
    freezeTableName: true,
  }
);
module.exports = CartProducts;
