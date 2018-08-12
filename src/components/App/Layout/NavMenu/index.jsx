import React, {Component} from 'react'

import Element from './Element'

class NavMenu extends Component {

  render() {
    const elements = [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Clients',
        to: '/clients'
      },
      {
        name: 'Products',
        to: '/products'
      },
      {
        name: 'Contact',
        to: '/contact'
      }
    ];

    return (
      <nav className="NavMenu">
        {elements.map((element, index) =>
          <Element key={index} name={element.name} to={element.to} />
        )}
      </nav>
    )
  }

}

export default NavMenu