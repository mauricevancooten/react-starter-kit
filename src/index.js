import express from 'express'
import compression from 'compression'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'
import Router from './components/Router'
import webpack from 'webpack'
import webpackConfig from '../webpack.client'
import Template from './components/Template'

const compiler = webpack(webpackConfig)
const app = express()
app.use(compression())

if (process.env.NODE_ENV === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}

app.use('/', express.static('public', { maxAge: '31d' }))

app.get('*', (req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Router/>
    </StaticRouter>
  )

  if (context.status) {
    res.status(404).send(Template({html}))
  } else {
    res.status(200).send(Template({html}))
  }

})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
