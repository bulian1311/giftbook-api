const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');
const imageRouter = require('./imageRouter');

module.exports = app => {
  app.use('/products', productRouter);
  app.use('/categories', categoryRouter);
  app.use('/images', imageRouter);
};
