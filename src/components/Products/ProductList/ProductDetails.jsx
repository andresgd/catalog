import React, {Component} from 'react'
import CurrencyFormat from 'react-currency-format'

function renderProduct(prod) {
  var cats = ""
  prod.categories.forEach((element, index) => {
    cats = index < prod.categories.length - 1 ? cats + element + ", " : cats + element
  })

  return (
    <React.Fragment>
      <header className="Product_List__item_header">
        <h2 className="Product_List__item_title">
          {prod.name}
        </h2>
        <h4 className="Product_List__item_subtitle" >
          {cats} - {prod.brand}
        </h4>
      </header>
      <section className="Product_List__item_content">
        <figure className="Product_List__item_image" >
          <img src={prod.photo} alt={prod.name} width="160" height="120" />
        </figure>
        <section className="Product_List__item_description">
          <p>{prod.description}</p>
          <br/>
          <p><b>Stock:</b> {prod.stock}</p>
          <p><b>Price:</b> <CurrencyFormat value={prod.price} displayType={'text'} prefix={'$'} thousandSeparator={true} decimalScale={2} /></p>
        </section>
      </section>
    </React.Fragment>
  )
}

class ProductDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products
    })
  }

  render() {
    const prods = this.state.products.map((prod, index) =>
      <article key={prod.id} className="Product_List__item">
        {renderProduct(prod)}
      </article>
    )

    return (
      <React.Fragment>
        {prods}
      </React.Fragment>
    )
  }

}

export default ProductDetails