import React, { Component } from 'react';

import moment from 'moment'
import './../styles/time.css'

// Time Component: uses Moment to get time.
class Time extends Component {
  constructor () {
    super()
    this.state = {
      time: moment().format('LT'),
    }
  }

  // On Component mount calls for moment time and recalls it every 2 sec.
  componentDidMount () {
    this.update = setInterval(() => {
      this.setState({time: moment().format('LT')})
    }, 2000)
  }

  // Clean up before Component Unmount
  componentWillUnmount () {
    clearInterval(this.update)
  }

  render () {
    const { time } = this.state
    // Split time so that proper greeting can be selected.
    const ampm = time.split(' ')
    const timeHr = ampm[0].split(':')

    let timeGreet = ''
    if (ampm === 'AM') {
      timeGreet = 'Good Morning! '
    } else {
      if (parseInt(timeHr[0] < 6)) {
        timeGreet = 'Good Afternoon! '
      } else {
        timeGreet = 'Good Evening! '
      }
    }
    return (
      <div className='mid'>
        <h1 className='lgTime'>{time}</h1>
        <h1 className='mdGreet'>{timeGreet}</h1>
      </div>
    )
  }

}

export default Time
