const path = require("path");

module.exports = {
  i18n: {
    locales: [ "en", "ar"],
    localePath: path.resolve('./public/locales'),
    defaultLocale: "ar",
    localeDetection: false
  },
};