import React, { Component } from 'react';

import { getQuotes } from './../ApiCalls/apiCall.js'

class Quotes extends Component {
  constructor () {
    super()

    this.state = {
      quote: '',
      author: ''
    }
  }
  componentDidMount () {
    getQuotes()
      .then(res => this.setState({quote: res.data.quoteText, author: res.data.quoteAuthor}))
      .catch(console.error)
  }

  render () {
    const {quote, author } = this.state
    return (
      <footer>
        <p>{quote}</p>
        <p>- {author}</p>
      </footer>
    )
  }

}

export default Quotes
