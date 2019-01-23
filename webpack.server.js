const nodeExternals = require('webpack-node-externals')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/',
    filename: 'server.js'
  },
  target: 'node',
  optimization: {
    nodeEnv: false
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              exportOnlyLocals: true,
              sourceMap: true,
              modules: true,
              localIdentName:'[name]__[local]___[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
       {
         test: /\.js?$/,
         exclude: /(node_modules)/,
         loader: 'babel-loader'
       }
    ]
  },
  externals: nodeExternals()
}
