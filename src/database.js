const mongoose = require('mongoose');
const config = require('./config');

mongoose
  .connect(config.dbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
  })
  .then(() => console.info('Base de datos conectada online'))
  .catch((err) => console.error(err));


