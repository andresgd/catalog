import React, {Component} from 'react'

class NotFound extends Component {
  render() {
    return (
      <section className="Not_Found">
        <header className="Not_Found__header">
          <h1 className="Not_Found__title"> Oops! Not Found :( </h1>
        </header>
        <p className="Not_Found__intro">
          Something went wrong.
        </p>
      </section>
    )
  }
}

export default NotFound