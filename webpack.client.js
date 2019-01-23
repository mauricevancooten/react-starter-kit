const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry: [
    './src/app.js', './src/sass/styles.scss'
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  optimization: {
    nodeEnv: false
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
          use: [
            {
              loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'
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
          {
            loader: 'eslint-loader'
          },
           {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new UglifyJsPlugin())
  config.plugins.push(new MiniCssExtractPlugin({
    filename: "css/styles.css",
    chunkFilename: "[id].css"
  }))
}

if (process.env.NODE_ENV === 'development') {
  config.entry.push('webpack-hot-middleware/client')
}

module.exports = config
