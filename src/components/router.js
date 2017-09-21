import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import About from './about'

class Router extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Site Name</h1>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
        </header>
        <div className='wrapper'>
          <div className='container'>
            <Route exact path='/' render={() => <h1>Home</h1>}/>
            <Route path='/about' component={About}/>
          </div> {/* .container */}
        </div> {/* .wrapper */}
        <footer>
          <small>
            <a href='https://opensource.org/licenses/MIT'>MIT</a>
          </small>
        </footer>
      </div>
    )
  }
}

export default Router
