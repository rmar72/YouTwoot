module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ],
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000',
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['','.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
