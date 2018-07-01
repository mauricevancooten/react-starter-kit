const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'css/styles.css',
  allChunks: true,
  disable: process.env.NODE_ENV === 'development'
})

const config = {
  entry: [
    './src/app.js', './src/sass/styles.scss'
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'js/bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
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
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders:2,
                localIdentName:'[name]__[local]___[hash:base64:5]',
              }
            }
          ],
          fallback: 'style-loader'
        })
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader'
          }, {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new MinifyPlugin())
}

if (process.env.NODE_ENV === 'development') {
  config.entry.push('webpack-hot-middleware/client')
}

module.exports = config
