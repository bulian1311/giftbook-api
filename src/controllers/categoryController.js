const categoryModel = require('../models/categoryModel');

class CategoryController {
  async getAll(req, res) {
    try {
      const categories = await categoryModel.find();
      res.status(200).json(categories);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    try {
      const category = await categoryModel.findById(id);
      res.status(200).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async create(req, res) {
    const { title } = req.body;
    const category = new categoryModel({ title });

    try {
      await category.save();
      res.status(200).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new CategoryController();
