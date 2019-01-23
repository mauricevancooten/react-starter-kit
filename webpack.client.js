const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV === 'development'

const config = {
  entry: ['./src/app.js', './src/sass/styles.scss'],
  output: {
    path: __dirname + '/public/',
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
          use: [
            {
              loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
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
                sourceMap: true
              }
            }
          ]
        }, 
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
      chunkFilename: "css/[id].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

devMode && config.entry.push('webpack-hot-middleware/client') 

module.exports = config
