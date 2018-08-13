import React, {Component} from 'react'

import Element from './Element'

class NavMenu extends Component {

  render() {
    const elements = [
      {
        name: 'Home',
        to: '/',
        exact: true
      },
      {
        name: 'Clients',
        to: '/clients',
        exact: true
      },
      {
        name: 'Products',
        to: '/products',
        exact: false
      },
      {
        name: 'Contact',
        to: '/contact',
        exact: true
      }
    ]

    return (
        <nav className="NavMenu">
          <ul className="NavMenu__list">
            {elements.map((element, index) =>
              <Element key={index} name={element.name} to={element.to} exact={element.exact}/>
            )}
          </ul>
        </nav>
    )
  }

}

export default NavMenu