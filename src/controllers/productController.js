const Product = require('../models/productModel');

const productController = {
  getAll: async (req, res) => {
    try {
      const products = await {};
      res.status(200).json(products);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await {};
      res.status(200).json(product);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

module.exports = productController;
