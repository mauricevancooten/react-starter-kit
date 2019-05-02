import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Router from './components/Router'

ReactDOM.hydrate(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>,
document.getElementById('content'))

if (process.env.NODE_ENV === 'development') {
  module.hot.accept()
}
