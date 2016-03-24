module.exports = {
  target: 'node',
  entry: './src/app.ts',
  output: {
    filename: './target/app.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
