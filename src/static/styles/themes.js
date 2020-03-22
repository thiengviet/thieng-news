// For personale

const globalConfig = {
  globalRadius: "24px",
  globalHorizontalGutter: {
    xs: 24, sm: 24,
    md: 48, lg: 48,
    xl: 72, xxl: 128
  },
  globalVerticalGutter: 64,
  globalBodyBackgroundColor: "#f3f8fe",
  globalPrimaryColor: "#ff3e3c",
  globalSecondaryColor: "#1be2ff",
  globalColors: {
    purple: "#6662b5",
    yellow: "#ff9b21",
  }
}

// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
module.exports = {
  // Color
  "@body-background": globalConfig.globalBodyBackgroundColor,
  "@primary-color": globalConfig.globalPrimaryColor,
  // "@component-background": "#ffffff00",
  // Font
  "@font-family": "'Open Sans', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  // Border
  "@border-radius-base": "16px",
  "@border-style-base": "none",
  // Button
  "@btn-border-radius-base": "12px",
  "@btn-border-radius-sm": "12px",
  "@btn-primary-shadow": "0px 20px 30px 2px rgba(254, 83, 108, 0.25)",
  // Card
  "@card-radius": globalConfig.globalRadius,
  "@card-shadow": "0px 20px 30px 2px rgba(199, 213, 239, 1)",
  // Avatar
  "@avatar-border-radius": "16px",
  // Modal
  "@modal-footer-padding-vertical": "16px",
  "@modal-footer-padding-horizontal": "24px",
  // For personale
  ...globalConfig
}