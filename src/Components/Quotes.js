import React, { Component } from 'react';

import { getQuotes } from './../ApiCalls/apiCall.js'
import './../styles/quotes.css'

// Quotes component: make API request, gets random quotes and renders them
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
      .then(res => {
        console.log(res)
        this.setState({quote: res.data.quoteText, author: res.data.quoteAuthor})
      })
      .catch(console.error)
  }

  render () {
    const {quote, author } = this.state
    return (
      <footer className='footer'>
        <p className='smFont'>"{quote}"</p>
        <p className='mdFont'>- {author}</p>
      </footer>
    )
  }
}

export default Quotes
