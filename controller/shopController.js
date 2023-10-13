const { Shop } = require("../models");
const ApiError = require("../utils/apiError");

const createShops = async (req, res, next) => {
  try {
    //const userId = req.user.id;
    const { name } = req.body;

    const newShop = await Shop.create({
      name,
    });

    res.status(200).json({
      status: "Success",
      data: {
        newShop,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findAllShops = async (req, res) => {
  try {
    const Shops = await Shop.findAll();
    res.status(200).json({
      status: "Sukses",
      data: {
        Shops,
      },
    });
  } catch (error) {
    next(new ApiError(err.message, 400));
  }
};

const findShopByid = async (req, res, next) => {
  try {
    const Shops = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "suksess",
      data: {
        Shops,
      },
    });
  } catch (error) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createShops,
  findAllShops,
  findShopByid,
};
