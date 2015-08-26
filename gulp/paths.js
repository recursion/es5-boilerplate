module.exports = {
  // directory to build to
  dist: 'dist/',
  // ensure app.js is loaded last for concat purposes
  js: ['src/components/**/*.js', 'src/app.js'],
  html: ['src/index.html'],
  css: ['src/**/*.scss'],
  // put any vendor files here
  vendor: ['node_modules/mithril/mithril.js']
  // TODO: config a list of vendor assets that dont require minifying
};
