const express = require("express");
const app = express();
const Models = require("./Models");
const { sequelize } = require("./dbConnect");
const axios = require("axios");
const productRoutes = require("./Routes/productRoutes");
const userRoutes = require("./Routes/userRoutes");
const cartProductRoutes = require("./Routes/cartProductRoutes");

const seedData = async () => {
  //async function to seed the data. Called after the truncate function. All CRUD calls will fetch from the database after this has seeded it.
  const products = await axios.get("https://fakestoreapi.com/products");

  for (const product of products.data) {
    // provides a map of my schema names vs the api objects names
    const productModel = {
      productID: product.id,
      productName: product.title.slice(0, 49),
      ProductCategory: product.category,
      price: product.price,
      description: product.description.slice(0, 149),
      image: product.image.slice(0, 49),
      rating: product.rating.rate,
    };

    await Models.Product.create(productModel);
  }
};
const truncateData = async () => {
  //clears the tables

  Models.CartProducts.destroy({ where: {} });
  Models.Product.destroy({ where: {} });
  // Models.User.destroy({ where: {} });
};

const main = async () => {
  await Models.syncModels();
  await truncateData(); //-- calls the function to clear tables
  await seedData();

  // parse requests of content-type - application / json;
  app.use(express.json());
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to my Sequelize application." });
  });
  // set port, listen for requests
  const PORT = process.env.PORT || 8080;

  app.use("/products", productRoutes);
  app.use("/users", userRoutes)
  app.use("/cartProducts", cartProductRoutes)
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
};

main();
