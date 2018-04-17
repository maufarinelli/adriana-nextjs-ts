// module.exports = {
//   distDir: './dist/.next',
//   useFileSystemPublicRoutes: false
// };

const withSourceMaps = require('@zeit/next-source-maps');
module.exports = withSourceMaps({
  webpack(config, options) {
    return config
  },
  distDir: './dist/.next',
  useFileSystemPublicRoutes: false
});