const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const themes = require('./src/static/styles/themes');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    // Global variables
    modifyVars: themes,
  }),
);