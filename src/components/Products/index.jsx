import React, { Component } from 'react';
import axios from 'axios';

import CategoryFilter from './CategoryFilter';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: '',
      products: [],
      filteredProducts: [],
      totalProducts: 0,
      hiddenProducts: 0
    }
    this.setCategory = this.setCategory.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
    this.setQuantities = this.setQuantities.bind(this);
  }

  componentDidMount() {
    this.setupComponent(this.props.match.params.category);
  }

  componentWillReceiveProps(nextProps) {
    this.setupComponent(nextProps.match.params.category);
  }

  setupComponent(category) {
    this.setCategory(category);
    axios.get('/api_source/products.json')
      .then( response => {
        this.setState({
          products: response.data
        });

        this.filterProducts();
        this.setQuantities();

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  setCategory(category) {
    this.setState({
      category: category !== undefined ? category : ''
    });
  }

  filterProducts() {
    this.setState({
      filteredProducts: this.state.category !== '' ? this.state.products.filter(i => {
        return i.categories.some(i => i.toLowerCase() === this.state.category)
      }) : this.state.products
    });
  }

  setQuantities() {
    this.setState({
      totalProducts: this.state.products.length,
      hiddenProducts: this.state.products.length - this.state.filteredProducts.length
    });
  }

  render() {
    return (
      <section className="Products">
        <aside className="Products__categories">
          <CategoryFilter />
        </aside>
        <section className="Products__list">

        </section>
      </section>
    );
  }

}

export default Products;
