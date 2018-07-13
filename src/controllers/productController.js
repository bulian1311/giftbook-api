const Product = require('../models/productModel');

class ProductController {
  async getAll(req, res) {
    try {
      const products = await { message: 'Hello world!' };
      res.status(200).json(products);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    try {
      const product = await {};
      res.status(200).json(product);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

module.exports = new ProductController();
