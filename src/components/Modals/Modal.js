import React from "react";
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }


  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({isOpen: true})}>
          Open Modal
        </button>

        {this.state.isOpen && (<div className='modal'>
          <div className='modal-body'>
            <h1 className='modal-title'>Hello world</h1>
            <p>Modal text</p>
            <button onClick={() => this.setState({isOpen: false})}>
              Close
            </button>
          </div>
        </div>)}

      </React.Fragment>
    )
  }
}