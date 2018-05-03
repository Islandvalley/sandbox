import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    const { onClickButton } = this.props
    return <button onClick={onClickButton}>Click!</button>
  }
}

export default HelloWorld
