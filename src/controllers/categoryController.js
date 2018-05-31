const Category = require('../models/categoryModel');

const tagController = {
  getAll: async (req, res) => {
    try {
      const tags = await {};
      res.status(200).json(tags);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const tag = await {};
      res.status(200).json(tag);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

module.exports = tagController;
