import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Element extends Component {

  render() {

    return (
      <li className="NavMenu__item" >
        <NavLink exact={this.props.exact} to={this.props.to} className="NavMenu__item_link" activeClassName={"NavMenu__item_link--active"} >
          {this.props.name}
        </NavLink>
      </li>
    )
  }

}

export default Element