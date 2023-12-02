const express = require("express");
const router = express.Router();
const CartProductsroductsController = require("../Controllers/cartProductsController");
const { cartProductsController } = require("../Controllers");
router.get("/", cartProductsController.getCartProducts);
// router.post("/", cartProductsController.addCartProducts);
router.delete("/:cartProductID", cartProductsController.deleteCartProducts);
router.put("/:cartProductID", cartProductsController.getCartProducts);
module.exports = router;
