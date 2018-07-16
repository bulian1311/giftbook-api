const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const categorySchema = Schema({
  title: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },

  subCategories: [
    {
      type: ObjectId,
      ref: 'category'
    }
  ]
});

module.exports = mongoose.model('category', categorySchema);
