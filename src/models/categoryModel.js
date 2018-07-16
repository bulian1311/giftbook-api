const mongoose = require('mongoose');
const { Schema } = mongoose;
const { objectId } = Schema.types;

const categorySchema = Schema({
  title: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },

  subCategories: [
    {
      type: objectId,
      ref: 'category'
    }
  ]
});

module.exports = mongoose.model('category', categorySchema);
