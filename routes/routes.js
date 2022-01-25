const connect = require('./connect');
const product = require('./product')

module.exports = (app) => {
  app.use('/connect', connect)
  app.use('/product', product)
}