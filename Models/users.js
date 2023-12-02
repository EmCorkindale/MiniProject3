const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.sequelize;
class User extends Model {}

User.init(
  {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: false,
      required: true,
    },
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users", //use lowercase plural format
    freezeTableName: true,
  }
);
module.exports = User;
