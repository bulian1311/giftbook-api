const Category = require('../models/categoryModel');

class CategoryController {
  async getAll(req, res) {
    try {
      const tags = await {};
      res.status(200).json(tags);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    try {
      const tag = await {};
      res.status(200).json(tag);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

module.exports = new CategoryController();
