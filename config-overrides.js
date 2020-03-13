const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    // Global variables
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    modifyVars: {
      // Colors
      '@body-background': '#f3f8fe',
      '@primary-color': '#fe536c',
      '@link-color': '#1890ff',
      '@success-color': '#52c41a',
      '@warning-color': '#faad14',
      '@error-color': '#f5222d',
      // Border
      '@border-width-base': '0px',
      // Typography
      '@font-size-base': '14px',
      '@heading-color': 'rgba(0, 0, 0, 0.85)',
      '@text-color': 'rgba(0, 0, 0, 0.65)',
      '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
      '@disabled-color': 'rgba(0, 0, 0, 0.25)',
      // Button
      '@btn-border-radius-base': '12px',
      '@btn-border-radius-sm': '12px',
      '@btn-primary-shadow': '0px 20px 30px 2px rgba(254, 83, 108, 0.25)',
      // Card
      '@card-radius': '24px',
    },
  }),
);