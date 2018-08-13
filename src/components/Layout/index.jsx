import React from 'react'
import {Route} from 'react-router-dom'

import NavMenu from './NavMenu/index'

const Layout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="Layout">
        <NavMenu />
        <Component {...matchProps} />
      </div>
    )} />
  )
}

export default Layout