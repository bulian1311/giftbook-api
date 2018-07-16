const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');

module.exports = app => {
  app.use('/products', productRouter);
  app.use('/categories', categoryRouter);
};
