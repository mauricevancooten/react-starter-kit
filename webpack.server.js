const nodeExternals = require('webpack-node-externals')

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
            loader: "css-loader",
            options: {
              minimize: true,
              sourceMap: true,
              modules: true,
              localIdentName:'[name]__[local]___[hash:base64:5]',
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
