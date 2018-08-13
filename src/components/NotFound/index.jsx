import React, {Component} from 'react'

class NotFound extends Component {
  render() {
    return (
      <section className="Common_Container">
        <header className="Common_Container__header">
          <h1 className="Common_Container__title"> Oops! Not Found :( </h1>
        </header>
        <p className="Common_Container__intro">
          Something went wrong.
        </p>
      </section>
    )
  }
}

export default NotFound