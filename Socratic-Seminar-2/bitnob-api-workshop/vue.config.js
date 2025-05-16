const dotenv = require('dotenv').config();

module.exports = {
  outputDir: 'build',
  productionSourceMap: false,

  pluginOptions: {
    dotenv: {
      systemvars: true,
    }
  }
};
