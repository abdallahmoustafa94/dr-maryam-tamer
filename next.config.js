const path = require("path");
const { i18n } = require("./next-i18next.config"); // Import your i18n configuration

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  i18n, // Use your imported i18n configuration here
};
