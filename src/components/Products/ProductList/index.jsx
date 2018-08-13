import React, {Component} from 'react'

import ProductShowingDetails from './ProductShowingDetails'
import ProductDetails from './ProductDetails'

class ProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      totalProducts: 0,
      hiddenProducts: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products,
      totalProducts: nextProps.totalProducts,
      hiddenProducts: nextProps.hiddenProducts
    })
  }

  render() {
    return (
      <section className="Product_List">
        <ProductShowingDetails total={this.state.totalProducts} hidden={this.state.hiddenProducts} />
        <ProductDetails products={this.state.products} />
      </section>
    )
  }

}

export default ProductList