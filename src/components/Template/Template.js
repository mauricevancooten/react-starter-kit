import React from 'react'

let styles = '/static/css/styles.css'

if (process.env.NODE_ENV === 'development') {
  styles = '/'
}

const Template = ({html}) => {
  return (
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Site Name</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="${styles}" />
    </head>
    <body>
      <div id="content">${html}</div>
      <script src="/static/js/bundle.js"></script>
    </body>
  </html>`)
}

export default Template
