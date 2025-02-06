const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru', 'uz'],
  },
  localePath: path.resolve('./src/app/locales'), 
};
