module.exports = {
  entry: './app/main.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100
  },
  module: {
    loaders: [
      {
	test: /\.js$/,
	execlude: /node_modules/,
	loader: 'babel'
      }
    ]
  }
}
