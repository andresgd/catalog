import React, {Component} from 'react'

class ProductShowingDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      hidden: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      total: nextProps.total,
      hidden: nextProps.hidden
    })
  }

  render() {
    return (
      <p className="Product_List__showing_details">
        Showing <b>{this.state.total}</b> products - Hidden: <b>{this.state.hidden}</b>
      </p>
    )
  }

}

export default ProductShowingDetails