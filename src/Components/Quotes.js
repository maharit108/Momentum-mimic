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
        let n = this.randomNumber(res.data.length)
        this.setState({quote: res.data[n].text, author: res.data[n].author})
      })
      .catch(console.error)
  }

  randomNumber = (max) => { 
    return Math.floor(Math.random() * max);
  } 

  render () {
    const {quote, author } = this.state
    return (
      <footer className='footer'>
        <p className='smFont'>"{quote}"</p>
        <p className='mdFont'>- {author ? author : 'unknown'}</p>
      </footer>
    )
  }
}

export default Quotes
