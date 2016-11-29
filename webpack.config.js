module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: "js/bundle.js",
    chunkFilename: "js/[id].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel'}
    ]
  }
}