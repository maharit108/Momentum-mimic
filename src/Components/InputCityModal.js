import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

export class InputCityModal extends Component {
    constructor () {
        super()
        this.state = {
          show: true,
          cityName: ''
        }
      }

      handleChange = (e) => {
        this.setState({cityName: e.target.value})
      }

      handleClose = () => {
          this.setState({show: false})
      }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Location</Modal.Title><br />
                    <input type="text" id="city" onChange={this.handleChange} placeholder='Chicago' /><br />
                </Modal.Header>
            </Modal>
        )
            
    }
}

export default InputCityModal
