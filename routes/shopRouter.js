const router = require("express").Router();

const Shop = require("../controller/shopController");

router.get("/", Shop.findAllShops);
router.post("/", Shop.createShops);
router.get("/:id", Shop.findShopByid);

module.exports = router;
