import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Element extends Component {

  render() {
    return (
        <NavLink exact to={this.props.to} className="Element__Nav_Link" activeClassName={"Element__Nav_Link--active"} >
          {this.props.name}
        </NavLink>
    )
  }

}

export default Element