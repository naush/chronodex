module.exports = {
  entry: ['babel-polyfill', './entry.js'],

  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx?$)/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
