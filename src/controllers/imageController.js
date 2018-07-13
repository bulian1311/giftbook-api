const Image = require('../models/imageModel');

class ImageController {
  async getAll(req, res) {
    try {
      const images = await {};
      res.status(200).json(images);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    try {
      const image = await {};
      res.status(200).json(image);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

module.exports = new ImageController();
