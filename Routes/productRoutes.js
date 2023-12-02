const express = require("express");
const router = express.Router();
const productsController = require("../Controllers/productsController");
const { cartProductsController } = require("../Controllers");
router.get("/", productsController.getProducts);
router.post("/", productsController.addProducts);
router.delete("/:productID", productsController.deleteProducts);
router.put("/:productID", productsController.updateProducts);
router.post("/:productID/addToCart", cartProductsController.addCartProducts);

module.exports = router;
 //products/1/addToCart?userID=1