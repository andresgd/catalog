import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

function renderCategoryFilter(name, to,index) {
  if (index !== 0)
    return <NavLink key={"cat_" + index} exact to={to} className="Categories__Nav_Link" activeClassName="Categories__Nav_Link--active" >{name}</NavLink>
  else
    return (
      <React.Fragment key={index}>
        <NavLink exact to={to} className="Categories__Nav_Link" activeClassName="Categories__Nav_Link--active" >{name}</NavLink>
        <hr className="Categories__nav_divisor"/>
      </React.Fragment>
    )
}

class CategoryFilter extends Component {

  render() {
    const categories = [
      {
        name: 'All',
        to: '/products'
      },
      {
        name: 'Tech',
        to: '/products/tech'
      },
      {
        name: 'Services',
        to: '/products/services'
      },
      {
        name: 'Office',
        to: '/products/office'
      }
    ];

    const categoriesRender = categories.map((cat, index) =>
      renderCategoryFilter(cat.name, cat.to, index)
    );

    return (
      <nav className="Categories">
       {categoriesRender}
      </nav>
    )
  }

}

export default CategoryFilter