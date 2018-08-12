import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
/*Container*/
import Layout from './Layout/index'
/*Components*/
import Home from '../Home/index'
import Clients from '../Clients/index'
import Contact from '../Contact/index'
import Products from '../Products/index'
import NotFound from './NotFound/index'

class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout exact path="/" component={Home} />
          <Layout exact path="/clients" component={Clients} />
          <Layout exact path="/contact" component={Contact} />
          <Layout exact path="/products/:category?" component={Products} />
          <Layout component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router