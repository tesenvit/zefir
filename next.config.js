const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'sass',)],
    prependData: `@import "styles/weather.scss";`
  },
}
