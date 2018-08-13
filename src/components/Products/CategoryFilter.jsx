import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'

function renderCategoryFilter(cat, index) {
  if (index !== 0)
    return (
      <li key={index} className="Categories_Filter__menu_item">
        <NavLink  exact to={cat.to} className="Categories_Filter__menu_item_link" activeClassName="Categories_Filter__menu_item_link--active" >
          <FontAwesomeIcon icon={cat.icon} className="Categories_Filter__menu_item_icon"  />
          <span className="Categories_Filter__menu_item_name">{cat.name}</span>
        </NavLink>
      </li>
    )
  else
    return (
      <React.Fragment key={index}>
        <li className="Categories_Filter__menu_item">
          <NavLink exact to={cat.to} className="Categories_Filter__menu_item_link" activeClassName="Categories_Filter__menu_item_link--active" >
            <FontAwesomeIcon icon={cat.icon} className="Categories_Filter__menu_item_icon" />
            <span className="Categories_Filter__menu_item_name">{cat.name}</span>
          </NavLink>
        </li>
        <hr className="Categories_Filter__menu_divisor"/>
      </React.Fragment>
    )
}

class CategoryFilter extends Component {

  render() {
    const categories = [
      {
        name: 'All',
        to: '/products',
        icon: 'bars'
      },
      {
        name: 'Tech',
        to: '/products/tech',
        icon: 'laptop'
      },
      {
        name: 'Services',
        to: '/products/services',
        icon: 'wrench'
      },
      {
        name: 'Office',
        to: '/products/office',
        icon: 'folder'
      }
    ]

    const categoriesRender = categories.map((cat, index) =>
      renderCategoryFilter(cat, index)
    )

    return (
      <aside className="Categories_Filter">
        <header className="Categories_Filter__header">
          <p className="Categories_Filter__header_title">Categories</p>
        </header>
        <nav className="Categories_Filter__menu">
          <ul className="Categories_Filter__menu_list">
            {categoriesRender}
          </ul>
        </nav>
      </aside>
    )
  }

}

export default CategoryFilter