import React from 'react'
import { Provider } from 'react-redux'
import HelloWorldContainer from '../containers/HelloWorldContainer'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorldContainer />
      </div>
    )
  }
}
