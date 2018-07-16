const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const productSchema = Schema({
  title: { type: String, required: true },

  description: { type: String, required: true },

  price: { type: String, required: true },

  url: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },

  images: [{ url: String }],

  category: { type: ObjectId, ref: 'category' }
});

module.exports = mongoose.model('product', productSchema);
