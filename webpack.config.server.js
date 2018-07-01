const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/',
    filename: 'server.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              minimize: true,
              sourceMap: true,
              modules: true,
              localIdentName:'[name]__[local]___[hash:base64:5]',
            }
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              sourceMap: true,
              modules: true,
              importLoaders:2,
              localIdentName:'[name]__[local]___[hash:base64:5]',
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
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/styles.css',
      allChunks: true,
      disable: process.env.NODE_ENV === 'development'
    })
  ],
  externals: nodeExternals()
}
